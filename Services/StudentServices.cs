using System;
using GraduationProject.Models;
using MongoDB.Driver;

namespace GraduationProject.Services
{
    public class StudentServices : IStudentServices
    {
        private readonly IMongoCollection<Student> _students;
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

        public Student Create(Student student)
        {
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
    }
}
