using abra_interview.Server.Models;
using abra_interview.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace abra_interview.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PetsController : ControllerBase
    {
        private readonly MongoDbService _mongoDbService;

        public PetsController(MongoDbService mongoDbService)
        {
            _mongoDbService = mongoDbService;
        }

        [HttpPost]
        public async Task<IActionResult> AddPet([FromBody] Pet newPet)
        {
            try
            {

                if (newPet == null)
                {
                    return BadRequest("Pet is null.");
                }

                // Create a new Pet object using the constructor
                var pet = new Pet(newPet.PetName, newPet.PetType,newPet.PetType, newPet.PetAge);

                // Add the pet to the database
                await _mongoDbService.AddPetAsync(pet);

                return Ok(pet);
            }
            catch (Exception ex)
            {

                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPets()
        {
            try
            {
                // Call the method from the MongoDbService to get all pets
                var pets = await _mongoDbService.GetPetsAsync();
                // Return the pets as a JSON response
                return Ok(pets);
            }
            catch (Exception ex)
            {
                // If an exception occurs, return an error response
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

    }
}
