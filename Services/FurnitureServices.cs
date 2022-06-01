using GraduationProject.Models;
using MongoDB.Driver;

namespace GraduationProject.Services
{
    public class FurnitureServices : IFurnitureServices
    {
        private readonly IMongoCollection<Furniture> _furniture;

        public FurnitureServices(IDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase("CyprusHomes");
            _furniture = database.GetCollection<Furniture>("furniture");
        }

        public Furniture Create(Furniture furniture)
        {
            _furniture.InsertOne(furniture);
            return furniture;
        }

        public List<Furniture> Get()
        {
            return _furniture.Find(furniture => true).ToList();
        }

        public Furniture Get(string id)
        {
            return _furniture.Find(furniture => furniture.Id == id).FirstOrDefault();
        }

        public void Remove(string id)
        {
            throw new NotImplementedException();
        }

        public void Update(string id, Furniture furniture)
        {
            throw new NotImplementedException();
        }
    }
}
