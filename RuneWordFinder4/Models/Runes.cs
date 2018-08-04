using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;
using System.ComponentModel.DataAnnotations;

namespace RuneWordFinder4.Models
{
    /*
        private MongoClient mongoClient = new MongoClient("mongodb://127.0.0.1:27017");
        
        public string GetRunes()
        {
            IMongoDatabase conn = mongoClient.GetDatabase("RuneWordFinder");
            ICollection coll = conn.GetCollection("Runes");
        }
     */

    public class Runes
    {
        public MongoDB.Bson.ObjectId ObjectId { get; set; }
        public String Name { get; set; }
        [DataType(DataType.ImageUrl)]
        public string Image { get; set; }
        public string Weapon { get; set; }
        public string Armor { get; set; }
        public string Shield { get; set; }
        public int Level { get; set; }
    }
}
