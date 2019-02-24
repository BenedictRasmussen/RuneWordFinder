using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace RuneWordFinder4.Models
{
    public class Runewords
    {
        [BsonId]
        public ObjectId ObjectId { get; set; }
        [BsonElement("name")]
        public string Name { get; set; }
        [BsonElement("type")]
        public string Type { get; set; }
        [BsonElement("runeName")]
        public string RuneName { get; set; }
        [BsonElement("runes")]
        public IEnumerable<string> Runes { get; set; }
        [BsonElement("stats")]
        public IEnumerable<string> Stats { get; set; }
    }
}
