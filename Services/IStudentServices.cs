using GraduationProject.Models;

namespace GraduationProject.Services
{
    public interface IStudentServices
    {
        List<Student> Get();
        Student Get(string id);
        Student GetByEmail(string email);
        Student Create(Student book);
        void Update(string id, Student book);
        void Remove(string id);
        string Authenticate(Student student, string password);
    }
}
