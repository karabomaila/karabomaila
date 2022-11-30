import styles from '../styles/footer.module.css'

export default function Footer()
{
    return (
        <footer className= { styles.footer }>
            <p>&copy; copyright 2022</p>
            <a href='https://www.linkedin.com/in/karabo-maila-379543218' target="_blank" ><img src='/logo-linkedin.svg' alt="Linkedin" loading='lazy' /></a>
            <a href='https://github.com/karabomaila' target="_blank"  ><img src='/logo-github.svg' alt="Github" loading='lazy' /></a>
        </footer>
    )
}