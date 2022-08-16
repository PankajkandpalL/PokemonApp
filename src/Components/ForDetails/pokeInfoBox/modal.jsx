import { Badge, Button, useDisclosure } from "@chakra-ui/react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { useContext } from "react"
import { pokeContext } from "../../../Context/pokeContext"

function Modald({ability,i,url}){

    const { isOpen, onOpen, onClose } = useDisclosure()
    let { abilitiesData,handleAbilityData } = useContext(pokeContext)


    return (
        <>
            {
                !(JSON.stringify(abilitiesData)===JSON.stringify({}))
                ?
                <>
                    <Button onClick={()=>{
                    onOpen()
                    handleAbilityData(url)
                }} colorScheme={ i===0 ? "orange" : " yellow"  }>{ ability }</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>
                    <Badge>Ability</Badge>
                    <h3><i>{ability}</i></h3>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Badge> Effect </Badge>
                    <ul>
                    {
                        abilitiesData.effect_entries.map((el)=>(
                            <li style={{
                                marginTop:"10px"
                            }} >{el.effect}</li>   
                        ))
                    }
                    </ul>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
                </>
                :
                <>Loading...</>
            }
        </>
    )
}

export {
    Modald
}