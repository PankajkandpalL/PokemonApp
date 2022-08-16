import { Badge, Box, Heading, Progress, Tooltip } from "@chakra-ui/react";
import { useContext } from "react";
import { pokeContext } from "../../../Context/pokeContext";

function PokeStats(){

    let { pokemonDetails } = useContext(pokeContext)

    return(
        <Box p="10px" width="275px" >
            <Heading color="red.700" >Stats</Heading>
            {
                !(JSON.stringify(pokemonDetails)===JSON.stringify({}))
                ?
                <>
                {
                   pokemonDetails.stats.map((el,i)=>(
                    <Box marginTop={"25px"} textAlign={"left"} color="green" >
                        <Tooltip variant="outline" hasArrow={true} bg="green.400" color="white" label={ (i==0) 
                            ? <i>for hit points</i> 
                            : (i==1) 
                            ?  <i>A skill that every pokemon have.</i>  
                            : (i===2) 
                            ? <i>Defense Points</i> 
                            : (i==3) 
                            ? <i>first unique skill</i> 
                            : (i===4) 
                            ? <i>second unique skill</i> 
                            : <i>describe how much fast a pokemon is!</i> }>
                            <Badge fontSize={"20px"} variant="outline" colorScheme='black'>{el.stat.name}</Badge>
                        </Tooltip>
                        <Box marginTop={"10px"} border={"1px solid pink"} p="5px" borderRadius={"4px"} >
                            <Progress colorScheme='pink' size='md' value={el.base_stat} />
                        </Box>
                    </Box>
                   )) 
                }
                </>
                :
                <>Loading...</>
            }
        </Box>
    )
}

export {PokeStats}