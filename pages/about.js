import MetaData from '../components/MetaData'
import PageHead from '../components/PageHead'
import styles from '../styles/about.module.css'

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
                                to learn and punctual. I am passiotnate about software development and using 
                                technology to change peoples lives. My interests are reading books, travelling,
                                going out, investing and meditation.
                            </p>
                        </div>
                        <div>
                            <h1>Skills</h1>
                            <div className={ styles.skills }>
                                <img src='/about_images/logo-html5.svg' alt='HTML Icon' />
                                <img src='/about_images/logo-css3.svg' alt='CSS Icon' />
                                <img src='/about_images/logo-javascript.svg' alt='JavaStript Icon' />
                                <img src='/about_images/logo-react.svg' alt='React Icon' />
                                <img src='' alt='Next Js Icon' />
                            </div>
                        </div>
                    </div>
                </main>
        </div>
    )
}