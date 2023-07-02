import MetaData from '../components/MetaData'
import PageHead from '../components/PageHead'
import styles from '../styles/contact.module.css'

export default function Contact()
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
            <h1>Get In Touch With <span>Me</span> </h1>
            <div className={styles.form_container}>
                <div>
                <form action='https://formspree.io/f/moqbzkaa' method='POST'>
                    <div>
                        <label htmlForfor="name" >Name</label>
                        <input type="text" name="name" placeholder='Enter Your Name' required className='name_input' />
                    </div>
                    <div>
                        <label for="name" >Email</label>
                        <input type="email" name="email" placeholder='Enter Your Email' required 
                            className='email_input' />
                    </div>

                    <label for="name" >Message</label>
                    <textarea cols="60" rows="10" name="message" placeholder='Enter Your Message' 
                        required> 
                    </textarea>

                    <input type="submit" value="Submit" className={ styles.submit_btn } />
                </form>
                </div>
            </div>
        </div>
    )
}