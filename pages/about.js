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
                            <p>I am from Ivory Park, Johannesburg. I am self-motivated, hard working 
                                and a disciplined individual. My strengths include being organised, willing
                                to learn and punctual. I am passionate about software development and using 
                                technology to change peoples lives. My interests are reading books, travelling,
                                investing and meditation.
                            </p>
                        </div>
                        <div>
                            <h1>Skills</h1>
                            <div className={ styles.skills }>
                                <Image src='/about_images/logo-html5.svg' alt='HTML Icon' width={250} height={250} />
                                <Image src='/about_images/logo-css3.svg' alt='CSS Icon' width={250} height={250} />
                                <Image src='/about_images/logo-javascript.svg' alt='JavaStript Icon' width={250} height={250} />
                                <Image src='/about_images/logo-react.svg' alt='React Icon' width={250} height={250} />
                                <Image src='' alt='Next Js Icon' width={250} height={250}/>
                            </div>
                        </div>
                    </div>
                </main>
        </div>
    )
}