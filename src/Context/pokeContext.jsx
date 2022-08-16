import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'
import { useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

export const pokeContext = createContext();


function PokemonContext({children}){


    const { colorMode, toggleColorMode } = useColorMode()

    let [ allDebouncePokeData,setAllDebouncePokeData ] = useState([])
    let [ text,setText ] = useState("")
    let [ textBool,setTextBool ] = useState(false)
    let [ loading,setLoading ] = useState(false)
    let [ bool,setBool ] = useState(false)
    let [ pokemonDetails,setPokemonDetails ] = useState({})
    let navigates = useNavigate()
    let [ image,setImage ] = useState("")
    let [ imageTxt,setImageTxt ] = useState("")
    let [ imgBool,setimgBool ] = useState(false)
    let [ typesData,setTypesData ] = useState({})
    let [ abilitiesData,setAbilitiesData ] = useState({})
    let [ abilitesBool,setabilitiesBool ] = useState(false)
    
    useEffect(()=>{
        if(textBool)
        {
            getAllPokeData()
        }
    },[text])
    

    useEffect(()=>{
        if(imgBool)
        {
            getImage();
        }    
    },[imageTxt])

    let getImage=(()=>{

        if(imageTxt==="Default")
        {
            setImage(pokemonDetails.sprites.other.home.front_default)
        }
        else if(imageTxt==="Shiny")
        {
            setImage(pokemonDetails.sprites.other.home.front_shiny)
        }
        else if(imageTxt==="Female")
        {
            setImage(pokemonDetails.sprites.other.home.front_female)
        }
        else if(imageTxt==="Female_Shiny")
        {
            setImage(pokemonDetails.sprites.other.home.front_shiny_female)
        }
    })

    let lethandleImageText = (e) =>{
        setImageTxt(e)
    }

    
    let getAllPokeData = () =>{
        setLoading(true)

        axios.get('https://my-first-masai-json-server.herokuapp.com/pokeData', {
            params: {
                q : text
            }
        }).then((res)=>{
            if(res.data.length>100)
            {
                setAllDebouncePokeData([])
            }
            else{
                setLoading(false)
                setAllDebouncePokeData(res.data)
            }
        })
        .finally(()=>{
            setLoading(false)
        })
    }

    let handleText = (e) =>{
        setText(e)
        if(text.length<=1)
        {
            setTextBool(false)
        }
        else{
            setTextBool(true)
        }
    }

    let id;

    let handleDebouncing = (e) =>{

        if(e.length===0)
        {
            setBool(false)
        }
        else{
            setBool(true)
        }
        
        if(id)
        {
            clearInterval(id)
        }
        id = setTimeout(() => {
            handleText(e)
        }, 300)
    }

    let handleClickedOption = (url) => {
        
        axios.get(url).then((res)=>{
            setPokemonDetails(res.data)
            setImage(res.data.sprites.other.home.front_default)
        })
        navigates("/pokemonDetails")
        setimgBool(true)
    }

    let handleTypesData = (url) =>{
        axios.get(url).then((res)=>{
            setTypesData(res.data)
        })
    }

    let handleAbilityData = (url) =>{
        setabilitiesBool(true)
        axios.get(url).then((res)=>{
            setAbilitiesData(res.data)
        })
    }


    return (
        <pokeContext.Provider value={{ abilitesBool,handleAbilityData,abilitiesData,typesData,handleTypesData, image, lethandleImageText, pokemonDetails, bool, loading, colorMode, handleDebouncing, handleClickedOption, allDebouncePokeData, toggleColorMode }} >{children}</pokeContext.Provider>
    )
}

export {PokemonContext} 