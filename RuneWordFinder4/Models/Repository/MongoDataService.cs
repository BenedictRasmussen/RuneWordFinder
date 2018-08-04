﻿using MongoDB.Driver;
using MongoDB.Bson;
using System.Collections.Generic;

namespace RuneWordFinder4.Models.Repository
{
    //https://samueleresca.net/2015/08/querying-mongodb-with-asp-net-mvc/
    //TODO: Cache some results
    public class MongoDataService
    {
        private const string Collection = "Runes";
        internal MongoRepo repo = new MongoRepo("mongodb://127.0.0.1:27017", "RuneWordFinder");

        public IMongoCollection<Runes> RuneCollection;

        public MongoDataService() =>
            RuneCollection.Database.GetCollection<Runes>(Collection);
        
        /// <summary>
        /// Given the name of a rune, return the associated document from the Runes collection
        /// </summary>
        /// <param name="rune">the name of the rune in the document</param>
        /// <returns>the document associated with the rune parameter from the Runes collection</returns>
        public string FindRune(string rune) =>
            RuneCollection.Find(new BsonDocument { { "name", rune } }).FirstAsync().Result.ToString();

        /// <returns>Returns all rune documents in the Runes collection</returns>
        public List<Runes> FindRunes() =>
            RuneCollection.Find(new BsonDocument()).ToList<Runes>();

    }
}