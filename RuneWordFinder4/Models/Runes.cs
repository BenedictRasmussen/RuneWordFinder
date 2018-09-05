using System;
using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace RuneWordFinder4.Models
{
    public class Runes
    {
        [BsonId]
        public ObjectId ObjectId { get; set; }
        [BsonElement("name")]
        public String Name { get; set; }
        [BsonElement("image")]
        public string Image { get; set; }
        [BsonElement("alt-text")]
        public String AltText { get; set; }
        [BsonElement("weapon")]
        public string Weapon { get; set; }
        [BsonElement("armor")]
        public string Armor { get; set; }
        [BsonElement("shield")]
        public string Shield { get; set; }
        [BsonElement("level")]
        public int Level { get; set; }
    }
}
