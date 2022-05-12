using GraduationProject.Models;
using GraduationProject.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GraduationProject.Controllers
{
    [Route("api/offers")]
    [ApiController]
    public class OfferController : ControllerBase
    {
        private readonly IOfferServices _offerServices;

        public OfferController(IOfferServices offerServices)
        {
            _offerServices = offerServices;
        }

        // GET: api/<StudentController>
        [HttpGet]
        public ActionResult<List<Offer>> Get()
        {
            return _offerServices.Get();
        }

        // GET api/<StudentController>/5
        [HttpGet("{id}")]
        public ActionResult<Offer> Get(string id)
        {
            var offer = _offerServices.Get(id);
            if (offer == null)
            {
                return NotFound($"Offer with Id = {id} not found");
            }

            return offer;
        }

        // POST api/<StudentController>
        [HttpPost]
        public ActionResult<Student> Post([FromBody] Offer offer)
        {
            offer.CreatedAt = DateTime.Now;
            offer.ViewCount = 0;
            _offerServices.Create(offer);
            return CreatedAtAction(nameof(Get), new { id = offer.Id }, offer);
        }
    }
}
