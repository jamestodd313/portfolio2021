import {gsap} from 'gsap'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
export const Navbar = ({setClicked, light}) => {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [activeLink, setActiveLink] = useState(undefined)
    useEffect(()=>{
        setActiveLink(router.asPath.substr(1))
    },[router.asPath])

    function handleLink(e){
        e.preventDefault()
        if( router.asPath === `/${e.target.innerText.toLowerCase()}`) return
        else setClicked(e.target.innerText.toLowerCase())
    }
    let navbar = useRef(null)
    useEffect(()=>{
        if(light){
            let navTL = gsap.timeline()
            navTL.to(navbar, {filter: "invert(1) brightness(1.2)", duration: 0.3})
        }
    }, [light])
    return (
        <>
            <header ref={el=> navbar = el}>
                <Link href="/" as="/">
                    <a className="logo" aria-label="home">james todd</a>
                </Link>
                <div className="button-container">
                    <button className={open ? "menu-toggle open" : "menu-toggle"} onClick={e=> setOpen(!open)}>
                        <svg className="burger" xmlns="http://www.w3.org/2000/svg" width="35.922" height="28.969" viewBox="0 0 35.922 28.969">
                            <g id="Icon_feather-menu" data-name="Icon feather-menu" transform="translate(-3 -7.5)">
                                <path id="Path_4" data-name="Path 4" d="M4.5,18H37.422" transform="translate(0 3.984)" fill="none" stroke="#454545" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                                <path id="Path_5" data-name="Path 5" d="M4.5,9H37.422" fill="none" stroke="#454545" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                                <path id="Path_6" data-name="Path 6" d="M4.5,27H37.422" transform="translate(0 7.969)" fill="none" stroke="#454545" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                            </g>
                        </svg>
                    </button>
                </div>
                <nav className={open ? "open" : null}>
                    <a href="/about" className={`nav-link ${activeLink === "about" ? 'active' : ''}`} data-id="about" onClick={e=> handleLink(e)}>about</a>
                    <a href="/work" className={`nav-link ${activeLink === "work" ? 'active' : ''}`} data-id="work" onClick={e=> handleLink(e)}>work</a>
                    <a href="/contact" className={`nav-link ${activeLink === "contact" ? 'active' : ''}`} data-id="contact" onClick={e=> handleLink(e)}>contact</a>
                </nav>
            </header>
        </>
    )
}
