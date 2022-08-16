import { Box, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { pokeContext } from "../../Context/pokeContext";
import { Debounce } from "./Debounce/debounce";
import { IInput } from "./Inputs/input";


function Home(){

   let { bool } = useContext(pokeContext)


    return (
        <Box>
            {/* <Box position={"absolute"} top="0px" left={"-130px"} >
                <Image src="https://i.postimg.cc/9My6mSB7/My-project-1.png" />
            </Box> */}
            <Box>
                <IInput />
            </Box>
            <Box position={"absolute"} right="-120px" top={"30px"} >
                <Image src="https://i.postimg.cc/YSz0vXRJ/Pokemon-Pikachu-Transparent.png" />
            </Box>
            {
                bool 
                ?
                <Box>
                    <Debounce />
                </Box>
                :
                <></> 
            }
        </Box>
    )
}

export {Home}