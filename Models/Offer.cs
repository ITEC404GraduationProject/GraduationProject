using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GraduationProject.Models
{
    public class Offer
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = String.Empty;

        [BsonElement("description")]
        [BsonRequired]
        public string Description { get; set; }

        [BsonElement("viewCount")]
        [BsonRequired]
        public int ViewCount { get; set; }

        [BsonElement("priceId")]
        [BsonRequired]
        [BsonRepresentation(BsonType.ObjectId)]
        public string PriceId { get; set; } = "6259607999701ebf5376aca8";

        [BsonElement("agentId")]
        [BsonRequired]
        [BsonRepresentation(BsonType.ObjectId)]
        public string AgentId { get; set; } = "62595eeb99701ebf5376ac9d";

        [BsonElement("housingTypeId")]
        [BsonRequired]
        [BsonRepresentation(BsonType.ObjectId)]
        public string HousingTypeId { get; set; } = String.Empty;

        [BsonElement("furnitureId")]
        [BsonRequired]
        [BsonRepresentation(BsonType.ObjectId)]
        public string FurnitureId { get; set; } = String.Empty;

        [BsonElement("createdAt")]
        [BsonRequired]
        public DateTime CreatedAt { get; set; }

    }
}
