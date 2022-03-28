using System.ComponentModel.DataAnnotations;
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
        [BsonRequired]
        public string Name { get; set; }

        [BsonElement("surname")]
        [BsonRequired]
        public string Surname { get; set; }

        [BsonElement("password")]
        [BsonRequired]
        [MinLength(8)]
        [RegularExpression("(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,})$", ErrorMessage = "Invalid Password")]
        public string Password { get; set; }

        [BsonElement("email")]
        [BsonRequired]
        [RegularExpression("^[a-zA-Z0-9_\\.-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$", ErrorMessage = "E-mail is not valid")]
        public string Email { get; set; }

        [BsonElement("studentNumber")]
        [BsonRequired]
        public string StudentNumber { get; set; }
    }
}
