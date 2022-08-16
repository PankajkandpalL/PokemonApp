import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { pokeContext } from "../../Context/pokeContext";
import { PokeInfoBox } from "./pokeInfoBox/pokeInfoBox";

function PokemonBasicInfoPage(){

    let { pokemonDetails } = useContext(pokeContext)
    
    
    return (
        <Box>

            <Box>
                <NavLink to="/">Back</NavLink>
                {
                    !(JSON.stringify(pokemonDetails)===JSON.stringify({}))
                    ? 
                    <Box>
                        <Box>
                            <Heading color="yellow.600" >{ pokemonDetails.name.toUpperCase() }</Heading>
                        </Box>
                        <Box>
                            <PokeInfoBox />
                        </Box>
                    </Box>
                    :
                    <Box>
                        <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
                    </Box>
                }
            
            </Box>
        </Box>
    )
}

export {PokemonBasicInfoPage}