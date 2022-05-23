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

        [BsonElement("address")]
        [BsonRequired]
        public string Address { get; set; }

        [BsonElement("imageLink")]
        [BsonRequired]
        public string ImageLink { get; set; } = "noImage.jpg";

        [BsonElement("viewCount")]
        [BsonRequired]
        public int ViewCount { get; set; }

        [BsonElement("priceId")]
        [BsonRequired]
        [BsonRepresentation(BsonType.ObjectId)]
        public string PriceId { get; set; }

        [BsonElement("agentId")]
        [BsonRequired]
        [BsonRepresentation(BsonType.ObjectId)]
        public string AgentId { get; set; }

        [BsonElement("housingTypeId")]
        [BsonRequired]
        [BsonRepresentation(BsonType.ObjectId)]
        public string HousingTypeId { get; set; }

        [BsonElement("furnitureId")]
        [BsonRequired]
        [BsonRepresentation(BsonType.ObjectId)]
        public string FurnitureId { get; set; }

        [BsonElement("createdAt")]
        [BsonRequired]
        public DateTime CreatedAt { get; set; }

    }
}
