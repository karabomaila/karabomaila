import Link from 'next/link';
import styles from '../styles/Navbar.module.css'
import { useEffect } from 'react';

export default function Navbar()
{

    // useEffect(() => {
    //     const menu = document.querySelector("#menu");
    //     const nav = document.querySelector("nav");
    //     const ul = document.querySelector("nav ul");
    //     menu.addEventListener("click", () => {
    //         ul.classList.toggle("show");
    //     })
    // }, [])
    const tog = (event) => {
        // const ul = document.querySelector("nav ul");
        // ul.classList.toggle("show");
        console.log("working")
    }
    return (
        <header className= { styles.header }>
            <Link href="/" className={ styles.logo }>Karabo Maila</Link>
            <div className={ styles.humburger } onClick={(e) =>  tog(e)} > <div className={ styles.bar }></div> </div>
            <nav className={ styles.navbar }>
                <ul className={ styles.navbar_ul }>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/about">About</Link></li>        
                </ul>
            </nav>
        </header>
    )
}