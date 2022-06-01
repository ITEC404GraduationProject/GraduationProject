using GraduationProject.Models;

namespace GraduationProject.Services
{
    public interface IAgentServices
    {
        List<Agent> Get();
        Agent Get(string id);
        Agent GetByEmail(string email);
        Agent Create(Agent student);
        void Update(string id, Agent student);
        void Remove(string id);
        string Authenticate(Agent student, string password);
    }
}
