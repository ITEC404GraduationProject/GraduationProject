using GraduationProject.Models;
using MongoDB.Driver;

namespace GraduationProject.Services
{
    public class PriceServices : IPriceServices
    {
        private readonly IMongoCollection<Price> _price;

        public PriceServices(IDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase("CyprusHomes");
            _price = database.GetCollection<Price>("prices");
        }

        public Price Create(Price price)
        {
            _price.InsertOne(price);
            return price;
        }

        public List<Price> Get()
        {
            return _price.Find(Price => true).ToList();
        }

        public Price Get(string id)
        {
            return _price.Find(price => price.Id == id).FirstOrDefault();
        }

        public void Remove(string id)
        {
            throw new NotImplementedException();
        }

        public void Update(string id, Price price)
        {
            throw new NotImplementedException();
        }
    }
}
