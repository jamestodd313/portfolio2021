import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import { Navbar } from "../components/nav/Navbar";

export default function contact(){
    const router = useRouter()
    const [clicked, setClicked] = useState(undefined)
    useEffect(()=>{
        if(!clicked) return
        setTimeout(()=>{
            router.push(`/${clicked}`)
        }, 1000)
    },[clicked])
    return (
        <>
            <Navbar setClicked={setClicked}/>
        </>
    )
}