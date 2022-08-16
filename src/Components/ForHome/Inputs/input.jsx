import { SearchIcon } from "@chakra-ui/icons";
import { Box, IconButton, Input } from "@chakra-ui/react";
import { useContext } from "react";
import { pokeContext } from "../../../Context/pokeContext";

function IInput(){

    let { colorMode,handleDebouncing,loading } = useContext(pokeContext)
  

    return (
        <Box marginTop="300px" >
            {
                colorMode==="dark" 
                ? 
                <Box>
                    <Input onChange={(e)=>handleDebouncing(e.target.value)} borderColor={'blue.600'} color={'#F6E05E'} maxW='35%' _placeholder={{ color: '#4299E1' }} placeholder="Search For Your Favourite Pokemon...." />
                    <IconButton isLoading={loading} position={"absolute"} left="998px" colorScheme='blue' aria-label='Search database' icon={<SearchIcon />} />
                </Box>
                :
                <Box>
                    <Input onChange={(e)=>handleDebouncing(e.target.value)} maxW='35%' color={'#ED64A6'} bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)' placeholder="Search..." />
                    <IconButton isLoading={loading} position={"absolute"} zIndex="999" left="998px" colorScheme='blue' aria-label='Search database' icon={<SearchIcon />} />
                </Box>
            }
        </Box>
    )
}

export {IInput}