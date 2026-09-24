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
                                <Image src='/about_images/logo-html5.svg' alt='HTML Icon' width={250} height={250} />
                                <Image src='/about_images/logo-css3.svg' alt='CSS Icon' width={250} height={250} />
                                <Image src='/about_images/logo-javascript.svg' alt='JavaStript Icon' width={250} height={250} />
                                <Image src='/about_images/logo-react.svg' alt='React Icon' width={250} height={250} />
                                <Image src='/about_images/nextjs-fill.svg' alt='Next Js Icon' width={250} height={250} />
                                <Image src='/about_images/icons8-java.svg' alt='Java Icon' width={250} height={250} />
                                <Image src='/about_images/springboot.svg' alt='Spring boot Icon' width={250} height={250} />
                                <Image src='/about_images/thymeleaf.svg' alt='Thymeleaf Icon' width={250} height={250} />
                                <Image src='/about_images/logo-python.svg' alt='Python Icon' width={250} height={250} />
                            </div>
                        </div>
                    </div>
                </main>
        </div>
    )
}