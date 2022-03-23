using GraduationProject.Models;

namespace GraduationProject.Services
{
    public interface IStudentServices
    {
        List<Student> Get();
        Student Get(string id);
        Student Create(Student book);
        void Update(string id, Student book);
        void Remove(string id);
    }
}
