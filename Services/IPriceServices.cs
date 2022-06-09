using GraduationProject.Models;

namespace GraduationProject.Services
{
    public interface IPriceServices
    {
        List<Price> Get();
        Price Get(string id);
        List<Price> GetHighestAndLowest();
        Price Create(Price price);
        void Update(string id, Price price);
        void Remove(string id);
    }
}
