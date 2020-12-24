import Link from 'next/link'
import { useState } from 'react'
export const Navbar = ({setClicked}) => {
    const [open, setOpen] = useState(false)
    function handleLink(e){
        e.preventDefault()
        setClicked(e.target.innerText.toLowerCase())
    }
    return (
        <>
            <header>
                <Link href="/" as="/">
                    <a className="logo">james todd</a>
                </Link>
                <div className="button-container">
                    <button className={open ? "menu-toggle open" : "menu-toggle"} onClick={e=> setOpen(!open)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35.922" height="28.969" viewBox="0 0 35.922 28.969">
                            <g id="Icon_feather-menu" data-name="Icon feather-menu" transform="translate(-3 -7.5)">
                                <path id="Path_4" data-name="Path 4" d="M4.5,18H37.422" transform="translate(0 3.984)" fill="none" stroke="#454545" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                                <path id="Path_5" data-name="Path 5" d="M4.5,9H37.422" fill="none" stroke="#454545" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                                <path id="Path_6" data-name="Path 6" d="M4.5,27H37.422" transform="translate(0 7.969)" fill="none" stroke="#454545" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                            </g>
                        </svg>
                    </button>
                </div>
                <nav className={open ? "open" : null}>
                    <a href="/about" className="nav-link" data-id="about" onClick={e=> handleLink(e)}>about</a>
                    <a href="/work" className="nav-link" data-id="work" onClick={e=> handleLink(e)}>work</a>
                    <a href="/contact" className="nav-link" data-id="contact" onClick={e=> handleLink(e)}>contact</a>
                </nav>
            </header>
        </>
    )
}
