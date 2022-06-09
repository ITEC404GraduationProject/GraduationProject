using GraduationProject.Models;
using GraduationProject.Services;
using Microsoft.AspNetCore.Mvc;
using BCrypt.Net;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GraduationProject.Controllers
{
    [Authorize]
    [Route("api/agent")]
    [ApiController]
    public class AgentController : ControllerBase
    {

        private readonly IAgentServices _agentServices;

        public AgentController(IAgentServices agentServices)
        {
            _agentServices = agentServices;
        }

        // GET: api/<StudentController>
        [HttpGet]
        [AllowAnonymous]
        public ActionResult<List<Agent>> Get()
        {
            return _agentServices.Get();
        }

        // GET api/<StudentController>/5
        [HttpGet("{id}")]
        public ActionResult<Agent> Get(string id)
        {
            var agent = _agentServices.Get(id);
            if (agent == null)
            {
                return NotFound($"Student with Id = {id} not found");
            }

            return agent;
        }

        // POST api/<StudentController>
        [HttpPost]
        [AllowAnonymous]
        public ActionResult<Student> Post([FromBody] Agent agent)
        {

            var existingAgent = _agentServices.GetByEmail(agent.Email);
            if (existingAgent == null)
            {
                _agentServices.Create(agent);
                return CreatedAtAction(nameof(Get), new { id = agent.Id }, agent);
            }

            return NotFound("Student with this email already exist");
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public ActionResult<Student> Authenticate([FromBody] UserCred userCred)
        {
            var existingAgent = _agentServices.GetByEmail(userCred.Email);
            if (existingAgent == null)
            {
                return NotFound("Student account with this email was not found");
            }

            var token = _agentServices.Authenticate(existingAgent, userCred.Password);
            if (token == null)
            {
                return Unauthorized();
            }

            return Ok(new { token, user = existingAgent });

        }

        // PUT api/<StudentController>/5
        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Agent agent)
        {
            var existingAgent = _agentServices.Get(id);

            if (existingAgent == null)
            {
                return NotFound($"Agent with Id = {id} not found");
            }

            agent.Id = existingAgent.Id;

            _agentServices.Update(id, agent);

            return NoContent();
        }

        // DELETE api/<StudentController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var agent = _agentServices.Get(id);
            if (agent == null)
            {
                return NotFound($"Agent with Id = {id} not found");
            }

            _agentServices.Remove(agent.Id);

            return Ok($"Agent with Id = {id} deleted");
        }
    }
}
