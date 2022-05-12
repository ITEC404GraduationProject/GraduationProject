using GraduationProject.Models;

namespace GraduationProject.Services
{
    public interface IOfferServices
    {
        List<Offer> Get();
        Offer Get(string id);
        Offer Create(Offer offer);
        void Update(string id, Offer offer);
        void Remove(string id);
    }

}
