using GraduationProject.Models;
using GraduationProject.Services;
using Microsoft.AspNetCore.Mvc;


namespace GraduationProject.Controllers
{
    [Route("api/offer")]
    [ApiController]
    public class OfferController : ControllerBase
    {
        public class OfferDTO
        {
            public Offer Offer { get; set; }
            public Furniture Furniture { get; set; }
            public Price Price { get; set; }
        }

        private readonly IOfferServices _offerServices;
        private readonly IPriceServices _priceServices;
        private readonly IFurnitureServices _furnitureServices;

        public OfferController(IOfferServices offerServices, IPriceServices priceServices, IFurnitureServices furnitureServices)
        {
            _offerServices = offerServices;
            _priceServices = priceServices;
            _furnitureServices = furnitureServices;
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
        public ActionResult<Offer> Post([FromBody] OfferDTO offerDTO)
        {
            var offer = offerDTO.Offer;
            var furniture = offerDTO.Furniture;
            var price = offerDTO.Price;

            var newFurniture = _furnitureServices.Create(furniture);
            var newPrice = _priceServices.Create(price);

            offer.FurnitureId = newFurniture.Id;
            offer.PriceId = newPrice.Id;
            offer.CreatedAt = DateTime.Now;
            offer.ViewCount = 0;

            _offerServices.Create(offer);

            return CreatedAtAction(nameof(Get), new { id = offer.Id }, offer);
        }

        [HttpPost("image")]
        public async Task<IActionResult> SaveImage([FromForm] IFormFile postedFile)
        {
            var splittedName = postedFile.FileName.Split(".");
            var extencion = splittedName[splittedName.Length - 1];

            var newName = "offer_" + Path.GetRandomFileName() + "." + extencion;
            var path = "./Images/" + newName;

            while (System.IO.File.Exists(path))
            {
                newName = "offer_" + Path.GetRandomFileName() + "." + extencion;
                path = "./Images/" + newName;
            }

            using (var stream = System.IO.File.Create(path))
            {
                await postedFile.CopyToAsync(stream);
            }
            return Ok(new {fileName = newName});
        }

        // GET api/<StudentController>/5
        [HttpGet("image/{id}")]
        public ActionResult GetImage(string fileName)
        {
            var path = $"./Images/{fileName}";
            return new FileStreamResult(new FileStream(path, FileMode.Open), "image/png");
        }
    }
}
