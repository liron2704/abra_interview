import { useEffect, useState } from "react";

function ShowPets() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        getPets();
    }, []);


    //Get all pets from data
    const getPets = async () => {
        try {
            const response = await fetch('/api/pet');
            if (!response.ok) {
                throw new Error('Failed to fetch pets');
            }
            const data = await response.json();
            setPets(data);
        } catch (error) {
            console.error('Error fetching pets:', error);
        }
    };
    //Calculate sum of all pets ages
    const sumOfAges = () => {
        let ageCounter = 0;
        if (pets.length == 0) {
            return 0;
        }
        pets.forEach(pet => {
            ageCounter += pet.petAge;
            return ageCounter;
        })
    }

    return (
      <div>
            <h2>All Pets!!</h2>
            {pets.map(pet => (
                <div key={pet.id}>Name: {pet.petName} Age: {pet.petAge} Type: {pet.petType} Color: {pet.petColor}</div>
            ))}
            <hr />
            <p>Pets Number: {pets.length}</p>
            <hr />
            <p>Sum of Ages: {sumOfAges()}</p>
      </div>
        
  );
}

export default ShowPets;