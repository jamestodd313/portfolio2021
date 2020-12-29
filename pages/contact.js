import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import { Navbar } from "../components/nav/Navbar";
import { gsap } from 'gsap';
export default function contact(){
    const router = useRouter()
    const [clicked, setClicked] = useState(undefined)

    // ENTER ANIMATION
    useEffect(()=>{
        let enterTl = gsap.timeline()
        enterTl
        .from('.form-wrapper', {height: 0, duration: 0.5, overflow: "hidden"})
        .from('h1', {translateY: "48px", opacity: "0", delay: "-0.5", duration: 0.5})
        .from('label', {translateX: "-100px", opacity: "0", duration: 0.5, delay: "-0.5"})
        .from('input, textarea', {translateY: "150px", opacity: 0, duration: 0.5, delay: "-0.5"})
    },[])

    // FORM CONTROL
    const [name, setName] = useState('')
    const [replyTo, setReplyTo] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(obj){
        let txt = document.querySelectorAll('.submit-btn')[0]
        txt.value = "SENDING..."
        txt.value= "SENT"
        txt.style.pointerEvents = "none"
        console.log(obj)
    }
    function formExit(){
        let formExitTl = gsap.timeline()
        formExitTl
            .to('h1', {translateY: "-300px", opacity: 0, duration: 0.3, stagger: 0})
            .to('label', {translateY: "-300px", opacity: "0", duration: 0.3, stagger: 0,delay: "-0.3"})
            .to('input[type=text]', {translateY: "-300px", opacity: "0", duration: 0.3, stagger: 0, delay: "-0.3"})
            .to('textarea', {translateY: "-300px", opacity: "0", duration: 0.3, stagger: 0, delay: "-0.3"})
    }
    function handleSubmit(e){
        e.preventDefault()
        let objToSend = {name, replyTo, message}
        formExit()
        sendEmail(objToSend)
    }


    // EXIT ANIMATION
    function pageExit(){
        let exitTl = gsap.timeline()
        exitTl
        .to('.form-wrapper', {height: 0, duration: 0.5, overflow: "hidden"})
        .to('h1', {translateY: "48px", opacity: "0", delay: "-0.5", duration: 0.5})
        .to('label', {translateX: "-100px", opacity: "0", duration: 0.5, delay: "-0.5"})
        .to('input, textarea', {translateY: "150px", opacity: 0, duration: 0.5, delay: "-0.5"})
            
    }
    useEffect(()=>{
        if(!clicked) return
        pageExit()
        setTimeout(()=>{
            router.push(`/${clicked}`)
        }, 1000)
    },[clicked])

    return (
        <>
            <Navbar setClicked={setClicked}/>
            <div className="form-wrapper">

            </div>
            <div className="form-wrapper">
                <form className="contact-container" onSubmit={handleSubmit}>
                    <h1>LET'S WORK</h1>
                    <label htmlFor="name">What's your name?</label>
                    <input type="text" name="name" id="name" value={name} placeholder="ENTER YOUR NAME" onChange={e=> setName(e.target.value)} required/>

                    <label htmlFor="name">How can I contact you?</label>
                    <input type="text" name="name" id="name" value={replyTo} placeholder="EMAIL OR PHONE" onChange={e=> setReplyTo(e.target.value)} required/>
                    
                    <label htmlFor="name">What's up?</label>
                    <textarea name="name" id="name" value={message} placeholder="ENTER YOUR MESSAGE HERE" onChange={e=> setMessage(e.target.value)} required/>
                    <div>
                        <input type="submit" className="big-link submit-btn" value="SEND"/>
                    </div>
                </form>
            </div>
           
            <section className="links">
                <a href="" className="big-link reverse">CODEPEN</a>
                <a href="" className="big-link reverse">GITHUB</a>
                <a href="" className="big-link reverse">LINKEDIN</a>
                <a href="" className="big-link reverse">RESUME</a>
            </section>
        </>
    )
}