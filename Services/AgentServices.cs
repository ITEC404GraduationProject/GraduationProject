using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using GraduationProject.Models;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;

namespace GraduationProject.Services
{
    public class AgentServices : IAgentServices
    {
        private readonly IMongoCollection<Agent> _agents;
        private readonly string key = "This is super secret key for jwt";
        public AgentServices(IDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase("CyprusHomes");
            _agents = database.GetCollection<Agent>("agents");
        }

        public List<Agent> Get()
        {
            return _agents.Find(student => true).ToList();
        }

        public Agent Get(string id)
        {
            return _agents.Find(student => student.Id == id).FirstOrDefault();
        }

        public Agent GetByEmail(string email)
        {
            return _agents.Find(agent => agent.Email == email).FirstOrDefault();
        }

        public Agent Create(Agent agent)
        {
            var HashedPassword = BCrypt.Net.BCrypt.HashPassword(agent.Password);
            agent.Password = HashedPassword;
            _agents.InsertOne(agent);
            return agent;
        }

        public void Update(string id, Agent agent)
        {
            _agents.ReplaceOne(agent => agent.Id == id, agent);
        }

        public void Remove(string id)
        {
            _agents.DeleteOne(agent => agent.Id == id);
        }

        public string Authenticate(Agent agent, string password)
        {
            var IsPasswordValid = BCrypt.Net.BCrypt.Verify(password, agent.Password);

            if (IsPasswordValid)
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var tokenKey = Encoding.ASCII.GetBytes(key);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim(ClaimTypes.Name, agent.Id)
                    }),
                    Expires = DateTime.UtcNow.AddHours(1),
                    SigningCredentials = new SigningCredentials(
                        new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256Signature)
                };

                var token = tokenHandler.CreateToken(tokenDescriptor);
                return tokenHandler.WriteToken(token);
            }

            return "Wrong password";
        }
    }
}
