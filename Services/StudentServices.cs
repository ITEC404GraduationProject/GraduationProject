using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using GraduationProject.Models;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;

namespace GraduationProject.Services
{
    public class StudentServices : IStudentServices
    {
        private readonly IMongoCollection<Student> _students;
        private readonly string key = "This is super secret key for jwt";
        public StudentServices(IDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase("CyprusHomes");
            _students = database.GetCollection<Student>("students");
        }

        public List<Student> Get()
        {
            return _students.Find(student => true).ToList();
        }

        public Student Get(string id)
        {
            return _students.Find(student => student.Id == id).FirstOrDefault();
        }

        public Student GetByEmail(string email)
        {
            return _students.Find(student => student.Email == email).FirstOrDefault();
        }

        public Student Create(Student student)
        {
            var HashedPassword = BCrypt.Net.BCrypt.HashPassword(student.Password);
            student.Password = HashedPassword;
            _students.InsertOne(student);
            return student;
        }

        public void Update(string id, Student student)
        {
            _students.ReplaceOne(student => student.Id == id, student);
        }

        public void Remove(string id)
        {
            _students.DeleteOne(student => student.Id == id);
        }

        public string Authenticate(Student student, string password)
        {
            var IsPasswordValid = BCrypt.Net.BCrypt.Verify(password, student.Password);

            if (IsPasswordValid)
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var tokenKey = Encoding.ASCII.GetBytes(key);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim(ClaimTypes.Name, student.Id)
                    }),
                    Expires = DateTime.UtcNow.AddHours(1),
                    SigningCredentials = new SigningCredentials(
                        new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256Signature)
                };

                var token = tokenHandler.CreateToken(tokenDescriptor);
                return tokenHandler.WriteToken(token);
            }

            return "Wrong password";
        }
    }
}
