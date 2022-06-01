using GraduationProject.Models;
using GraduationProject.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GraduationProject.Controllers
{
    [Route("api/price")]
    [ApiController]
    public class PriceController : ControllerBase
    {
        private readonly IPriceServices _priceServices;

        public PriceController(IPriceServices priceServices)
        {
            _priceServices = priceServices;
        }

        // GET: api/<StudentController>
        [HttpGet]
        public ActionResult<List<Price>> Get()
        {
            return _priceServices.Get();
        }

        // GET api/<StudentController>/5
        [HttpGet("{id}")]
        public ActionResult<Price> Get(string id)
        {
            var price = _priceServices.Get(id);
            if (price == null)
            {
                return NotFound($"Offer with Id = {id} not found");
            }

            return price;
        }

        // POST api/<StudentController>
        [HttpPost]
        public ActionResult<Price> Post([FromBody] Price price)
        {
            _priceServices.Create(price);
            return CreatedAtAction(nameof(Get), new { id = price.Id }, price);
        }
    }
}
