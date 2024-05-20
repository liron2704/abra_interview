/* eslint-disable no-unused-vars */
import './App.css';
import { Route, Routes } from "react-router-dom";
import AddPet from "./components/AddPet";
import ShowPets from "../src/views/ShowPets"
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import { NavLink } from "react-router-dom";

function App() {

    return (
        <div>
            <NavLink to='/allpets'>Pets</NavLink>
            <Routes>
                <Route path='/' element={<AddPet />} />
                <Route path='/allpets' element={<ShowPets />}/>
            </Routes>
        </div>
    );
    
   
}

export default App;