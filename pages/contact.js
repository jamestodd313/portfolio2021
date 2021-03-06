import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import { Navbar } from "../components/nav/Navbar";
import { gsap } from 'gsap';
import emailjs from 'emailjs-com'
import Head from 'next/head';
import { ExternalLinks } from '../components/nav/ExternalLinks';
export default function contact({pageData}){
    const router = useRouter()
    const [clicked, setClicked] = useState(undefined)
    // ENTER ANIMATION
    useEffect(()=>{
        let enterTl = gsap.timeline()
        enterTl
        .from('.form-wrapper', {height: 0, duration: 0.8, overflow: "hidden", ease: "back"})
        .from('h1', {translateY: "48px", opacity: "0", duration: 0.5, delay: "-0.5"})
        .from('label', {translateX: "-100px", opacity: "0", duration: 0.5, delay: "-0.5"})
        .from('input, textarea', {translateY: "150px", opacity: 0, duration: 0.5, delay: "-0.5"})
        .from('.links', {opacity: 0, duration: 0.5, delay: "-0.5"})
    },[])

    // FORM CONTROL
    const [name, setName] = useState('')
    const [replyTo, setReplyTo] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(obj){
        const txt = document.querySelectorAll('.submit-btn')[0]
        txt.value = "SENDING..."

        emailjs.init('user_QDvaAk7HyF6P9fagkoIIS')
        emailjs.send("gmail", "template_rh6fY4CM", obj)
        .then(()=>{
            txt.value= "SENT"
            txt.style.pointerEvents = "none"
        })
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
        .to('.links', {translateX: '200px', opacity: 0, duration: 0.3, delay: "-0.3"})
            
    }
    useEffect(()=>{
        if(!clicked) return
        pageExit()
        setTimeout(()=>{
            router.push(`/${clicked}`)
        }, 550)
    },[clicked])

    return (
        <>
            <Head>
                <title>{pageData.title ? pageData.title : "Contact - James Todd"}</title>
            </Head>
            <Navbar setClicked={setClicked}/>
            <div className="form-wrapper">

            </div>
            <div className="form-wrapper">
                <form className="contact-container" onSubmit={handleSubmit}>
                    <h1>{pageData.heading}</h1>
                    <label htmlFor="name">{pageData.form.name.label}</label>
                    <input type="text" name="name" id="name" value={name} placeholder={pageData.form.name.placeholder} onChange={e=> setName(e.target.value)} required/>

                    <label htmlFor="replyTo">{pageData.form.replyTo.label}</label>
                    <input type="text" name="replyTo" id="replyTo" value={replyTo} placeholder={pageData.form.replyTo.placeholder} onChange={e=> setReplyTo(e.target.value)} required/>
                    
                    <label htmlFor="name">{pageData.form.message.label}</label>
                    <textarea name="name" id="name" value={message} placeholder={pageData.form.message.placeholder} onChange={e=> setMessage(e.target.value)} required/>
                    <div>
                        <input type="submit" className="big-link submit-btn" value="SEND"/>
                    </div>
                </form>
            </div>
            <ExternalLinks links={pageData.links}/>
        </>
    )
}

export const getStaticProps = async()=> {
    const pageCall = await fetch('https://jamestodd.dev/api/_v1/interface/pages/contact')
    const pageData = await pageCall.json()
    return {props: {pageData: pageData[0]}}
}