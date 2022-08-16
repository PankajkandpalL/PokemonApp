import { Box, Divider, Heading } from "@chakra-ui/react"
import { useContext } from "react"
import { pokeContext } from "../../../Context/pokeContext"
import styles from './debounce.module.css'
import { StarIcon,SearchIcon } from '@chakra-ui/icons'

function Debounce(){

    let { allDebouncePokeData,colorMode,handleClickedOption } = useContext(pokeContext)

    return (
        <Box>
            {
                colorMode==="dark"
                ?
                <Box margin={"auto"} id={styles.mainbox} maxW="35%" padding={"20px"} border="1px" h="300px" >
            { 
              allDebouncePokeData.length!==0
              ?
                <Box>
                    {
                        allDebouncePokeData.map((el)=>(
                                <Box>
                                <Box onClick={()=>handleClickedOption(el.url)} id={styles.mainboxCursor}  as="p" display={"flex"} justifyContent="space-between" marginBottom="10px" color={'#F6E05E'} >
                                    <Box>
                                        {el.name}
                                    </Box>
                                    <Box>
                                        <StarIcon />
                                    </Box>
                                </Box>
                                <Divider marginBottom="10px" color={'#F6E05E'} />
                                </Box>
                        ))
                    }
                </Box>
               :
               <Box display="flex" justifyContent={"center"} marginTop="100px" alignItems={"center"} >
                    <Box display="flex" gap="8px" >
                        <Box >
                            <SearchIcon/>
                        </Box>
                        <Box>
                            No Search Results 
                        </Box>
                    </Box>
               </Box>
            }       
        </Box>
        :
        <Box margin={"auto"} id={styles.whitebox} maxW="35%" padding={"20px"} border="1px" h="300px" >
            { 
              allDebouncePokeData.length!==0
              ?
                <Box>
                    {
                        allDebouncePokeData.map((el)=>(
                                <Box>
                                <Box onClick={()=>handleClickedOption(el.url)} id={styles.whiteboxCursor} as="p" display={"flex"} justifyContent="space-between" marginBottom="10px" color={'RGBA(0, 0, 0, 0.64)'} >
                                    <Box>
                                        {el.name}
                                    </Box>
                                    <Box>
                                        <StarIcon />
                                    </Box>
                                </Box>
                                <Divider marginBottom="10px" color={'#F6E05E'} />
                                </Box>
                        ))
                    }
                </Box>
               :
               <Box display="flex" justifyContent={"center"} marginTop="100px" alignItems={"center"} >
                    <Box display="flex" gap="8px" >
                        <Box >
                            <SearchIcon/>
                        </Box>
                        <Box>
                            No Search Results 
                        </Box>
                    </Box>
                </Box>
            }       
        </Box>
            }
        </Box>
    )
}

export {Debounce}