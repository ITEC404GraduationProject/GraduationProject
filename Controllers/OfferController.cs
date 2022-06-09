using GraduationProject.Models;
using GraduationProject.Services;
using Microsoft.AspNetCore.Mvc;


namespace GraduationProject.Controllers
{
    [Route("api/offer")]
    [ApiController]
    public class OfferController : ControllerBase
    {

        private readonly IOfferServices _offerServices;
        private readonly IPriceServices _priceServices;
        private readonly IFurnitureServices _furnitureServices;
        private readonly IAgentServices _agentServices;
        private readonly IHousingTypeServices _housingTypeServices;

        public OfferController(IOfferServices offerServices, IPriceServices priceServices, IFurnitureServices furnitureServices, IAgentServices agentServices, IHousingTypeServices housingTypeServices)
        {
            _offerServices = offerServices;
            _priceServices = priceServices;
            _furnitureServices = furnitureServices;
            _agentServices = agentServices;
            _housingTypeServices = housingTypeServices;
        }

        // GET: api/<StudentController>
        [HttpGet]
        public ActionResult<List<Offer>> Get()
        {
            var offers = _offerServices.Get();

            var offerDTOs = new List<Object>();

            foreach (var offer in offers)
            {
                offerDTOs.Add(new { Offer = offer, 
                    Furniture = _furnitureServices.Get(offer.FurnitureId), 
                    Price = _priceServices.Get(offer.PriceId), 
                    Agent = _agentServices.Get(offer.AgentId),
                    HousingType = _housingTypeServices.Get(offer.HousingTypeId)
                });
            }

            return Ok(offerDTOs);

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

            return Ok(new {Offer = offer, 
                Furniture = _furnitureServices.Get(offer.FurnitureId), 
                Price = _priceServices.Get(offer.PriceId), 
                Agent = _agentServices.Get(offer.AgentId),
                HousingType = _housingTypeServices.Get(offer.HousingTypeId)
            });
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
        [HttpGet("image/{fileName}")]
        public ActionResult GetImage(string fileName)
        {
            string[] splittedName = fileName.Split('.');
            string extencion = splittedName[splittedName.Length - 1];

            try
            {
                var path = $"./Images/{fileName}";
                return new FileStreamResult(new FileStream(path, FileMode.Open), $"image/{extencion}");
            }
            catch
            {
                var path = $"./Images/noImage.jpg";
                return new FileStreamResult(new FileStream(path, FileMode.Open), "image/jpg");
            }

        }
    }
}
