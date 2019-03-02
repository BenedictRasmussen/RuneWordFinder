using MongoDB.Driver;
using MongoDB.Bson;
using System.Collections.Generic;
using NLog;

namespace RuneWordFinder4.Models.Repository
{
    /// <summary>
    /// Much of the DataService implementation was inspired by
    /// https://samueleresca.net/2015/08/querying-mongodb-with-asp-net-mvc/
    /// </summary>
    public class MongoDataService
    {
        private static readonly Logger log = LogManager.GetCurrentClassLogger();
        private const string RunesCollectionName = "runes";
        private const string RunewordsCollectionName = "runewords";
        internal MongoRepo repo = new MongoRepo("mongodb://127.0.0.1:27017", "RuneWordFinder");

        public IMongoCollection<Runes> RuneCollection;
        public IMongoCollection<Runewords> RunewordCollection;

        public MongoDataService()
        {
            RuneCollection = repo.Database.GetCollection<Runes>(RunesCollectionName);
        }

        /// <summary>
        /// Given the name of a rune, return the associated document from the Runes collection
        /// </summary>
        /// <param name="rune">the name of the rune in the document</param>
        /// <returns>the document associated with the rune parameter from the Runes collection</returns>
        public string FindRune(string rune)
        {
            log.Info("MongoDataService::FindRune('{0}')", rune);
            string runeDoc = RuneCollection.Find(new BsonDocument { { "name", rune } }).FirstAsync().Result.ToString();
            log.Debug("FindRune({0}): {1}", rune, runeDoc);
            return runeDoc;
        }

        /// <returns>Returns all rune documents in the Runes collection</returns>
        public List<Runes> GetRunes()
        {
            log.Info("MongoDataService::GetRunes()");
            List<Runes> runeList = RuneCollection.Find(new BsonDocument()).ToList<Runes>();
            log.Debug("MongoDataService::GetRunes() returning {0} elements", runeList.Count);
            return runeList;
        }

        public List<Runewords> GetRuneWords()
        {
            log.Info("MongoDataService::GetRuneWords()");
            if (RunewordCollection == null)
            {
                RunewordCollection = repo.Database.GetCollection<Runewords>(RunewordsCollectionName);
                log.Info("Database contained runewords: " + RunewordCollection);
            }
            return RunewordCollection.Find(new BsonDocument()).ToList<Runewords>(); ;
        }
    }
}
