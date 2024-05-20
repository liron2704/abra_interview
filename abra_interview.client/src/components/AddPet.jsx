import { useState } from "react"
import { ColorPicker } from 'primereact/colorpicker';

export default function AddPet() {

    const [petName, setPetName] = useState('')
    const [petColor, setPetColor] = useState('');
    const [petAge, setPetAge] = useState(0);
    const [petType, setPetType] = useState('');
    const [loading, setLoading] = useState(false);
    
    //clear Form
    const clearForm = () => {
        setPetName('');
        setPetColor('');
        setPetAge(0);
        setPetType('');
    }

    //add pet event
    const handleAddPetEvent = async () => {
        try {
            setLoading(true);
            const newPet = {
                petName,
                petColor,
                petAge,
                petType,
            }
            const response = await fetch('/api/pet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newPet)
            });
            if (!response.ok) {
                throw new Error('Failed to add pet');
            }
            // Clear the form 
            clearForm();

            setLoading(false);
        } catch (error) {
            clearForm();
            console.error('Error adding pet:', error);
        }
    };
    return (
        <form className="add_pet" onSubmit={handleAddPetEvent}>
            <h1>Please add a new pet</h1>

            <p>Pet Name:</p>
            <input
                type="text"
                placeholder="Name"
                value={petName}
                maxLength={25}
                onChange={(e) => setPetName(e.target.value)}
            />

            <p>Pet Color:</p>
            <ColorPicker format="hex" value={petColor} onChange={(e) => setPetColor(e.value)} />

            <p>Pet age:</p>
            <input
                type="number"
                placeholder="Age"
                value={petAge}
                max={20}
                onChange={(e) => setPetAge(e.target.value)}
            />

            <p>Pet Type:</p>
            <select name="Type" onChange={(e) => setPetType(e.target.value)}>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="horse">Horse</option>
                <option value="other">Other</option>
            </select>
            {console.log(petType)}
            <hr />
            <button type="submit" style={{ borderColor: 'black' }}> Add Pet </button>
            {loading ? <p>loading...</p> : ''}
        </form>
    )
}
    

    
