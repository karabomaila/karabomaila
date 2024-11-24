import MetaData from '../components/MetaData'
import PageHead from '../components/PageHead'
import styles from '../styles/contact.module.css'
import ReCAPTCHA from 'react-google-recaptcha'
import React from 'react'

export async function getStaticProps() {
    const SITE_KEY = process.env.SITE_KEY
    const FORM_ID = process.env.FORM_ID

    return {
        props: {
            SITE_KEY,
            FORM_ID,
        },
    }
}

export default function Contact({ SITE_KEY, FORM_ID})
{

    return (
        <div className={styles.contact} >
             {/* a head for the page */}
            <PageHead 
                title= {"Contact | " + MetaData.siteName }
                description = { MetaData.description}
                ogType= "website"
                logo= { MetaData.logo }
                url= { MetaData.url }
            />
            <h1>Get In Touch With <span>Karabo</span> </h1>
            <div className={styles.form_container}>
                <div>
                <form action={ 'https://formspree.io/f/' + FORM_ID } method='POST'>
                    <div>
                        <label htmlFor="name" >Name</label>
                        <input type="text" name="name" placeholder='Enter Your Name' required className='name_input' />
                    </div>
                    <div>
                        <label htmlFor="name" >Email</label>
                        <input type="email" name="email" placeholder='Enter Your Email' required 
                            className='email_input' />
                    </div>

                    <label htmlFor="name" >Message</label>
                    <textarea cols="60" rows="10" name="message" placeholder='Enter Your Message' 
                        required> 
                    </textarea>

                    <ReCAPTCHA sitekey={ SITE_KEY } />

                    <input type="submit" value="Submit" className={ styles.submit_btn } />
                </form>
                </div>
            </div>
        </div>
    )
}