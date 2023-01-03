import styles from '../styles/footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer()
{
    return (
        <footer className= { styles.footer }>
            <p>&copy; copyright 2022</p>
            <Link href='https://www.linkedin.com/in/karabo-maila-379543218' target="_blank" ><Image src='/logo-linkedin.svg' alt="Linkedin" loading='lazy' width={200} height={200} /></Link>
            <Link href='https://github.com/karabomaila' target="_blank" rel="noreferrer" ><Image src='/logo-github.svg' alt="Github" loading='lazy' width={200} height={200} /></Link>
        </footer>
    )
}