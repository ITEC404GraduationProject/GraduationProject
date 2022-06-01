using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GraduationProject.Models
{
    public class Furniture
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = String.Empty;

        [BsonElement("hasBed")]
        [BsonRequired]
        public bool hasBed { get; set; } = false;

        [BsonElement("hasTV")]
        [BsonRequired]
        public bool hasTV { get; set; } = false;

        [BsonElement("hasInternet")]
        [BsonRequired]
        public bool hasInternet { get; set; } = false;

        [BsonElement("hasMicrowave")]
        [BsonRequired]
        public bool hasMicrowave { get; set; } = false;

        [BsonElement("hasKitchen")]
        [BsonRequired]
        public bool hasKitchen { get; set; } = false;

        [BsonElement("hasWashingMachine")]
        [BsonRequired]
        public bool hasWashingMachine { get; set; } = false;

        [BsonElement("hasAirConditioner")]
        [BsonRequired]
        public bool hasAirConditioner { get; set; } = false;

        [BsonElement("hasIron")]
        [BsonRequired]
        public bool hasIron { get; set; } = false;
    }
}
