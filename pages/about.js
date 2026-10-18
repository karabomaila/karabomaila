import MetaData from '../components/MetaData'
import PageHead from '../components/PageHead'
import styles from '../styles/about.module.css'
import Image from 'next/image'

export default function About()
{
    return (
        <div>
             {/* a head for the page */}
            <PageHead 
                title= {"About Me | " + MetaData.siteName }
                description = { MetaData.description}
                ogType= "website"
                logo= { MetaData.logo }
                url= { MetaData.url }
            />
                <main className={ styles.about }>
                    <div className={ styles.about_content }>
                        <div className={ styles.about_header }>
                            <h1>About  <span>Karabo</span> </h1>
                            <br />
                            <br />
                            <p>Karabo Maila is a Software Engineer currently based in Johannesburg, South Africa. 
                                Is a self-motivated, hard working and a disciplined individual.
                                Is a purpose driven person, passionate about software engineering and using technology 
                                to change peoples lives. Love's working on interesting software projects
                                that have a positive impact in the lives of the people who use it.
                            <br />
                            <br /> 
                            My interests are reading self-help and technical books, travelling, and investing.
                            </p>
                        </div>
                        <div>
                            <h2>Skills</h2>
                            <div className={ styles.skills }>
                                <span className={ styles.skill } data-label='HTML' role='img' aria-label='HTML' tabIndex={0}>
                                    <Image src='/about_images/logo-html5.svg' alt='' width={250} height={250} />
                                </span>
                                <span className={ styles.skill } data-label='CSS' role='img' aria-label='CSS' tabIndex={0}>
                                    <Image src='/about_images/logo-css3.svg' alt='' width={250} height={250} />
                                </span>
                                <span className={ styles.skill } data-label='JavaScript' role='img' aria-label='JavaScript' tabIndex={0}>
                                    <Image src='/about_images/logo-javascript.svg' alt='' width={250} height={250} />
                                </span>
                                <span className={ styles.skill } data-label='React' role='img' aria-label='React' tabIndex={0}>
                                    <Image src='/about_images/logo-react.svg' alt='' width={250} height={250} />
                                </span>
                                <span className={ styles.skill } data-label='Next.js' role='img' aria-label='Next.js' tabIndex={0}>
                                    <Image src='/about_images/nextjs-fill.svg' alt='' width={250} height={250} />
                                </span>
                                <span className={ styles.skill } data-label='Java' role='img' aria-label='Java' tabIndex={0}>
                                    <Image src='/about_images/icons8-java.svg' alt='' width={250} height={250} />
                                </span>
                                <span className={ styles.skill } data-label='Spring Boot' role='img' aria-label='Spring Boot' tabIndex={0}>
                                    <Image src='/about_images/springboot.svg' alt='' width={250} height={250} />
                                </span>
                                <span className={ styles.skill } data-label='Thymeleaf' role='img' aria-label='Thymeleaf' tabIndex={0}>
                                    <Image src='/about_images/thymeleaf.svg' alt='' width={250} height={250} />
                                </span>
                                <span className={ styles.skill } data-label='Python' role='img' aria-label='Python' tabIndex={0}>
                                    <Image src='/about_images/logo-python.svg' alt='' width={250} height={250} />
                                </span>
                            </div>
                        </div>
                    </div>
                </main>
        </div>
    )
}