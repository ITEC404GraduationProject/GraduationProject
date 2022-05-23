using GraduationProject.Models;
using GraduationProject.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GraduationProject.Controllers
{
    [Route("api/furniture")]
    [ApiController]
    public class FurnitureController : ControllerBase
    {
        private readonly IFurnitureServices _furnitureServices;

        public FurnitureController(IFurnitureServices furnitureServices)
        {
            _furnitureServices = furnitureServices;
        }

        // GET: api/<StudentController>
        [HttpGet]
        public ActionResult<List<Furniture>> Get()
        {
            return _furnitureServices.Get();
        }

        // GET api/<StudentController>/5
        [HttpGet("{id}")]
        public ActionResult<Furniture> Get(string id)
        {
            var furniture = _furnitureServices.Get(id);
            if (furniture == null)
            {
                return NotFound($"Offer with Id = {id} not found");
            }

            return furniture;
        }

        // POST api/<StudentController>
        [HttpPost]
        public ActionResult<Offer> Post([FromBody] Furniture furniture)
        {
            _furnitureServices.Create(furniture);
            return CreatedAtAction(nameof(Get), new { id = furniture.Id }, furniture);
        }
    }
}
