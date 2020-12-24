import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from "react";
import { Navbar } from "../../components/nav/Navbar";

export default function index(){
    const router = useRouter()
    const [clicked, setClicked] = useState(undefined)
    // exit animation
    useEffect(()=>{
        if(!clicked) return
        router.push(`/${clicked}`)
    },[clicked])
    return (
        <Navbar setClicked={setClicked}/>
    )
}