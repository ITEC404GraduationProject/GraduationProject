using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GraduationProject.Models
{
    public class Price
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = String.Empty;

        [BsonElement("currency")]
        [BsonRequired]
        public string Currency { get; set; } = "dollar";


        [BsonElement("amount")]
        [BsonRequired]
        public int Amount { get; set; }
    }
}
