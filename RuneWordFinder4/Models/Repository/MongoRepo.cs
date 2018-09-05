using MongoDB.Driver;

namespace RuneWordFinder4.Models.Repository
{
    public class MongoRepo
    {
        public MongoClient Client;
        public IMongoDatabase Database;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="url">URL to the database instance</param>
        /// <param name="database">the database to connect to</param>
        public MongoRepo(string url, string database)
        {
            Client = new MongoClient(url);
            Database = Client.GetDatabase(database);
        }
    }
}
