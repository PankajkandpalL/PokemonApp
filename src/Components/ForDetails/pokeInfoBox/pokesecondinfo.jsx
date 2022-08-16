import { Badge, Box, Flex, Heading, Spacer, Stack, useDisclosure } from "@chakra-ui/react";
import { useContext } from "react";
import { pokeContext } from "../../../Context/pokeContext";
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { Modald } from "./modal";

function DetailBox(){

    let { abilitesBool,pokemonDetails,handleTypesData,typesData,handleAbilityData } = useContext(pokeContext)
    const { isOpen, onOpen, onClose } = useDisclosure()

    console.log(typesData)

    return (
        <Box p="10px" w="33%" marginLeft={"10px"} >
            {
                JSON.stringify(pokemonDetails)===JSON.stringify({})
                ?
                <>Loading....</>
                :
                <Box w="100%" h="100%" >
                    <Box textAlign={"left"} >
                        <Heading color="blackAlpha.700" ><i>Species</i></Heading>
                        <Badge marginTop={"8px"} fontSize="24px" variant='outline' colorScheme='green'>{pokemonDetails.species.name}</Badge>
                    </Box>
                    <Box textAlign={"left"} marginTop="15px" >
                        <Heading color="blackAlpha.700" ><i>Ability</i></Heading>
                        <Stack marginTop={"8px"} direction='row' spacing={4} align='center'>
                            {
                                !abilitesBool
                                ? 
                                pokemonDetails.abilities.map((el,i)=>(
                                <>    
                                    {                                    
                                     <Button onClick={()=>handleAbilityData(el.ability.url)} colorScheme={ i===0 ? "orange" : " yellow"  }>{ el.ability.name }</Button> 
                                    }
                                </>  
                                ))  
                                :
                                pokemonDetails.abilities.map((el,i)=>(
                                    <>
                                    <Modald ability={el.ability.name} url={el.ability.url} i={i} /> 
                                    </>
                                ))  
                            }
                        </Stack>
                    </Box>
                    <Box textAlign={"left"} marginTop={"25px"}  color="black" width="150px" height="65px"  >
                        <Badge fontSize={"20px"} colorScheme='green'>Height</Badge>
                            <Box>
                                <b>{pokemonDetails.height} m</b>
                            </Box>
                    </Box>
                    <Box  marginTop={"10px"}  >
                        <Box textAlign="left" color="black" width="150px" height="65px"  >
                        <Badge fontSize={"20px"}  colorScheme='red'>Weight</Badge>
                            <Box>
                               <b>{pokemonDetails.weight} lbs</b>
                            </Box>
                        </Box>
                    </Box >
                    <Box marginTop={"10px"}  textAlign="left" >
                         <Heading color="blackAlpha.700" ><i>Type</i></Heading>
                         <Stack marginTop={"8px"} direction='row' spacing={4} align='center'>
                            {
                                pokemonDetails.types.map((el,i)=>(
                                    <>
                                    <Button onClick={()=>{
                                            onOpen()
                                            handleTypesData(el.type.url)
                                        }} colorScheme={ i===0 ? "red" : " blue"  }>{ el.type.name }</Button>
                                        <Modal closeOnEsc={true} isOpen={isOpen} onClose={onClose}>
                                            <ModalOverlay />
                                            <ModalContent>
                                            <ModalHeader>
                                                <Heading>{ el.type.name.toUpperCase() }</Heading>
                                            </ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                {
                                                    !(JSON.stringify(typesData)===JSON.stringify({}))
                                                    ?
                                                    <Box>
                                                        <Box>
                                                            <i><h3 color="yellow" >Weak Against</h3></i>
                                                            <Flex marginTop={"10px"} gap={"10px"} spacing={"10px"} >
                                                                {
                                                                    typesData.damage_relations.double_damage_from.map((el)=>(
                                                                        <Badge colorScheme={"red"} >{el.name}</Badge>
                                                                    ))
                                                                }
                                                            </Flex>
                                                        </Box>
                                                        <Box marginTop={"15px"} >
                                                            <i><h3 color="yellow" >Strong Against</h3></i>
                                                            <Flex marginTop={"10px"} gap="10px" spacing={"10px"} >
                                                                {
                                                                    typesData.damage_relations.double_damage_to.map((el)=>(
                                                                        <Badge colorScheme={"green"} >{el.name}</Badge>
                                                                    ))
                                                                }
                                                            </Flex>   
                                                        </Box>
                                                        <Box marginTop={"20px"} >
                                                            <Heading border="1px solid white" borderRadius={"10px"} py="5px" px="10px" >
                                                                <i >Moves</i>
                                                            </Heading>
                                                            <Flex wrap={"wrap"} gap="10px" marginTop={"10px"} >
                                                                {
                                                                    typesData.moves.map((el)=>(
                                                                        <Badge colorScheme={"blue"} >{el.name}</Badge>
                                                                    ))
                                                                }
                                                            </Flex>
                                                        </Box>
                                                    </Box>
                                                    :
                                                    <>Loading...</>
                                                }
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                                Close
                                                </Button>
                                            </ModalFooter>
                                            </ModalContent>
                                        </Modal>
                                    </>
                                ))
                            }
                        </Stack>
                    </Box>
                    <Box marginTop={"20px"}  textAlign="left" >
                        <Heading color="blackAlpha.700" ><i>Base Experience</i></Heading>
                        <Badge marginTop={"8px"} fontSize="24px" variant='outline' colorScheme='purple'>{pokemonDetails.base_experience}</Badge>
                    </Box>
                </Box>
            }
        </Box>
    )
}

export {DetailBox}

// ---------------------------------- =========================>

// ---piinpj ------ pjm;mllm-----------------?????>>>>>>

// ======------------------
//-------------------------