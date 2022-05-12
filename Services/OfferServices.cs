using GraduationProject.Models;
using MongoDB.Driver;

namespace GraduationProject.Services
{
    public class OfferServices : IOfferServices
    {

        private readonly IMongoCollection<Offer> _offers;

        public OfferServices(IDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase("CyprusHomes");
            _offers = database.GetCollection<Offer>("offers");
        }

        public List<Offer> Get()
        {
            return _offers.Find(offer => true).ToList();
        }

        public Offer Get(string id)
        {
            return _offers.Find(student => student.Id == id).FirstOrDefault();
        }

        public Offer Create(Offer offer)
        {
            _offers.InsertOne(offer);
            return offer;
        }

        public void Remove(string id)
        {
            throw new NotImplementedException();
        }

        public void Update(string id, Offer offer)
        {
            throw new NotImplementedException();
        }
    }
}
