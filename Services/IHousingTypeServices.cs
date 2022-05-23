using GraduationProject.Models;

namespace GraduationProject.Services
{
    public interface IHousingTypeServices
    {
        List<HousingType> Get();
        HousingType Get(string id);
        HousingType Create(HousingType housingType);
        void Update(string id, HousingType housingType);
        void Remove(string id);
    }
}
