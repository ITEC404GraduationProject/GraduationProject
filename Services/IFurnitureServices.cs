using GraduationProject.Models;

namespace GraduationProject.Services
{
    public interface IFurnitureServices
    {
        List<Furniture> Get();
        Furniture Get(string id);
        Furniture Create(Furniture furniture);
        void Update(string id, Furniture furniture);
        void Remove(string id);
    }
}
