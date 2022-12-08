import styles from '../styles/footer.module.css'
import Link from 'next/link'

export default function Footer()
{
    return (
        <footer className= { styles.footer }>
            <p>&copy; copyright 2022</p>
            <Link href='https://www.linkedin.com/in/karabo-maila-379543218' target="_blank" ><img src='/logo-linkedin.svg' alt="Linkedin" loading='lazy' /></Link>
            <Link href='https://github.com/karabomaila' target="_blank" rel="noreferrer" ><img src='/logo-github.svg' alt="Github" loading='lazy' /></Link>
        </footer>
    )
}