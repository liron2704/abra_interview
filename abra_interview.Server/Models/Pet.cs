using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace abra_interview.Server.Models
{
    public class Pet
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }


        [BsonElement("petName")]
        public string PetName { get; set; }


        [BsonElement("petColor")]
        public string PetColor{ get; set; }

        [BsonElement("petAge")]
        public int PetAge { get; set; }

        [BsonElement("petType")]
        public string PetType { get; set; }

        public string created_at { get; set; }
        public Pet()
        {
            this.Id = ObjectId.GenerateNewId().ToString();
            this.PetName = "";
            this.PetColor = "#000000";
            this.PetAge = 0;
            this.PetType = "";
            this.created_at = DateTime.Now.ToString("h:mm:ss tt");
        }

        public Pet(string petName, string petType, string petColor, int petAge)
        {
            this.PetName = petName;
            this.PetType = petType;
            this.PetColor = petColor;
            this.PetAge = petAge;
            this.Id = ObjectId.GenerateNewId().ToString();
            this.created_at = DateTime.Now.ToString("h:mm:ss tt");
        }
        
    }
}
