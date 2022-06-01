using GraduationProject.Models;
using GraduationProject.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GraduationProject.Controllers
{
    [Route("api/housingtype")]
    [ApiController]
    public class HousingTypeController : ControllerBase
    {
        private readonly IHousingTypeServices _housingTypeServices;

        public HousingTypeController(IHousingTypeServices housingTypeServices)
        {
            _housingTypeServices = housingTypeServices;
        }

        // GET: api/<StudentController>
        [HttpGet]
        public ActionResult<List<HousingType>> Get()
        {
            return _housingTypeServices.Get();
        }

        // GET api/<StudentController>/5
        [HttpGet("{id}")]
        public ActionResult<Offer> Get(string id)
        {
            return Ok();
        }

        // POST api/<StudentController>
        [HttpPost]
        public ActionResult<Student> Post([FromBody] Offer offer)
        {
            return Ok();
        }
    }
}
