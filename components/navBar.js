import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa"
import styles from '../styles/Navbar.module.css'
import React, { useState } from "react"
import Image from 'next/image'

export default function Navbar()
{
    const [ navActive, setNavActive] = useState(null)

    return (
        <header className={ styles.header }>
            <Link href="/" ><Image className={ styles.logo } src="/logo.ico" alt="Logo" width={45} height={45} priority={true} /></Link>
            <nav className={ `${navActive? styles.responsive_nav: ""} ${styles.nav}` }>
                <ul className={ styles.navbar_ul }>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/travelling">Travelling</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/about">About</Link></li>        
                </ul>

                {/* button for closing the menu */}
                <button className={ `${styles.nav_btn_open} ${styles.nav_close}`} onClick={ () => setNavActive(false) }>
                    <FaTimes/>
                </button>
            </nav>
            {/* For opening the menu for smaller screens */}
            <button className={styles.nav_btn_open} onClick={ () => setNavActive(!navActive) }>
                <FaBars className={ styles.fabars }/>
            </button>
        </header>
    )
}