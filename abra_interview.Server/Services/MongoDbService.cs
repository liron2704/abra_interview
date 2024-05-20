using abra_interview.Server.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;


namespace abra_interview.Server.Services
{
    public class MongoDbService
    {
        private readonly IMongoCollection<Pet> _petsCollection;

        public MongoDbService(IOptions<MongoDBSettings> mongoDbSettings)
        {
            MongoClient client = new MongoClient(mongoDbSettings.Value.ConnectionURI);

            IMongoDatabase database = client.GetDatabase(mongoDbSettings.Value.DatabaseName);

            _petsCollection = database.GetCollection<Pet>(mongoDbSettings.Value.CollectionName);
        }

        public async Task AddPetAsync(Pet pet)
        {
            await _petsCollection.InsertOneAsync(pet);
        }
        public async Task<List<Pet>> GetPetsAsync()
        {
            // Use Find method of IMongoCollection to retrieve all pets
            // ToListAsync() method is used to execute the query asynchronously and return the results as a list

            return await _petsCollection.Find(pet => true).ToListAsync();
        }
    }
}
