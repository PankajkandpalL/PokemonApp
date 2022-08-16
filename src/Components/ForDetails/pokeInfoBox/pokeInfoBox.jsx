import { Box, Button, Divider, Flex, Image, Stack } from "@chakra-ui/react"
import { useContext, useEffect } from "react"
import { pokeContext } from "../../../Context/pokeContext"
import { WarningIcon } from '@chakra-ui/icons'
import { Spinner } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { DetailBox } from "./pokesecondinfo"
import { PokeStats } from "./pokeStats"

function PokeInfoBox(){

    let { pokemonDetails,colorMode,image,lethandleImageText } = useContext(pokeContext)
    const toast = useToast()

    useEffect(()=>{
        window.document.title = `${pokemonDetails.name.toUpperCase()}  |  Pokedex`
    },[])

    return (
        <Box>
            {
                colorMode==="dark"
                ?
                <Box border="1px" bg="white" p="10px" height="625px" margin="auto" marginTop="30px" marginBottom="30px" borderRadius="6px" w="80%" >
                {
                    !(JSON.stringify(pokemonDetails)===JSON.stringify({}))
                    ?
                    <Box display="flex" >
                        <Box h="620px" >
                            {
                                image
                                ?
                                    <Image src={image} alt="icon" />
                                :
                                    <Box height="500px" width="500px" display="flex" justifyContent={"center"} alignItems={"center"} >
                                        <WarningIcon/> Sorry, Looks Like Nothing is there.
                                    </Box>
                            }
                            <Box display="flex" spacing={4} marginTop="30px" justifyContent="space-evenly" alignItems='center'>
                                <Button onClick={()=>{
                                        lethandleImageText("Default")
                                        toast({
                                            title: 'Image Changing to Default .',
                                            position: 'top',
                                            status: 'success',
                                            duration: 1000,
                                            isClosable: true,
                                          })
                                    }} colorScheme='teal' variant='outline'>
                                    Default
                                </Button>
                                <Button onClick={()=>{
                                    lethandleImageText("Shiny")
                                    toast({
                                        title: 'Image Changing to Shiny .',
                                        position: 'top',
                                        status: 'success',
                                        duration: 1000,
                                        isClosable: true,
                                      })}
                                    } colorScheme='teal' variant='outline'>
                                    Shiny
                                </Button>
                                <Button onClick={()=>{
                                    lethandleImageText("Female")
                                    toast({
                                        title: 'Image Changing to Female .',
                                        position: 'top',
                                        status: 'success',
                                        duration: 1000,
                                        isClosable: true,
                                      })}} colorScheme='teal' variant='outline'>
                                    Female
                                </Button>
                                <Button onClick={()=>{
                                    lethandleImageText("FShiny")
                                    toast({
                                        title: 'Image Changing to Female_Shiny .',
                                        position: 'top',
                                        status: 'success',
                                        duration: 1000,
                                        isClosable: true,
                                      })}} colorScheme='teal' variant='outline'>
                                    Female_Shiny
                                </Button>
                            </Box>
                        </Box>
                        <Box border={"0.2px solid black"} height="600px" ></Box>
                        <DetailBox/>  
                        <Box border={"0.2px solid black"} height="600px" ></Box>
                        <PokeStats />
                    </Box>
                    :
                    <Box>
                        <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
                    </Box>
                }
                </Box>
                :
                <Box border="1px" bg="black" height="625px" margin="auto" marginTop="30px" marginBottom="30px" borderRadius="6px" w="80%" >
                {
                    !(JSON.stringify(pokemonDetails)===JSON.stringify({}))
                    ?
                    <Box>

                    </Box>
                    :
                    <Box>
                        <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
                    </Box>
                }
                </Box>
            }
        </Box>
    )
}

export {PokeInfoBox}