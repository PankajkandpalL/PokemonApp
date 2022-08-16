import { NavLink } from "react-router-dom";
import { SunIcon,MoonIcon } from '@chakra-ui/icons'
import { Switch } from "@chakra-ui/react";
import { useContext } from "react";
import { pokeContext } from "../Context/pokeContext";



function Navbar(){

    let { toggleColorMode } = useContext(pokeContext)

    return (
        <div>
            <NavLink to="/" >Home</NavLink>
            <Switch transition={"all 500ms ease"} id='email-alerts' />
        </div>
    )
}

export {Navbar}