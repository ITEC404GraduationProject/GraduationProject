using GraduationProject.Models;
using MongoDB.Driver;

namespace GraduationProject.Services
{
    public class HousingTypeServices : IHousingTypeServices
    {

        private readonly IMongoCollection<HousingType> _housingTypes;

        public HousingTypeServices(IDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase("CyprusHomes");
            _housingTypes = database.GetCollection<HousingType>("housingTypes");
        }

        public HousingType Create(HousingType housingType)
        {
            throw new NotImplementedException();
        }

        public List<HousingType> Get()
        {
            return _housingTypes.Find(HousingType => true).ToList();
        }

        public HousingType Get(string id)
        {
            return _housingTypes.Find(housingType => housingType.Id == id).FirstOrDefault();
        }

        public void Remove(string id)
        {
            throw new NotImplementedException();
        }

        public void Update(string id, HousingType housingType)
        {
            throw new NotImplementedException();
        }
    }
}
