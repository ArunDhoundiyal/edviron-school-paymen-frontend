import { useContext } from 'react';
import {ToggleContext}  from '../ToggleContext'
import {ToggleButton} from './styledComponents' 
import { LuMoon } from "react-icons/lu";
import { LuSun } from "react-icons/lu";
const Toggle = () => {
    const {toggle,setToggle} = useContext(ToggleContext)
    console.log(toggle)
    return (
        <>
        <ToggleButton toggle={toggle} type='button' onClick={()=>{setToggle(!toggle)}}>
            {toggle ? <LuSun/> : <LuMoon/>}
        </ToggleButton>
        </>

    )
}

export default Toggle