import { Route, Routes } from "react-router-dom"
import { PokemonBasicInfoPage } from "../Components/ForDetails/pokeBasicInfoPage"
import { Home } from "../Components/ForHome/Home"

function AllRoutes(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} ></Route>
                <Route path="/pokemonDetails" element={<PokemonBasicInfoPage/>}></Route>
            </Routes>
        </div>
    )
}

export {AllRoutes}