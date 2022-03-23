using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GraduationProject.Models
{
    public class Student
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = String.Empty;

        [BsonElement("name")]
        public string Name { get; set; } = String.Empty;

        [BsonElement("surname")]
        public string Surname { get; set; } = String.Empty;

        [BsonElement("password")]
        public string Password { get; set; } = String.Empty;

        [BsonElement("email")]
        public string Email { get; set; } = String.Empty;

        [BsonElement("studentNumber")]
        public string StudentNumber { get; set; } = String.Empty;
    }
}
