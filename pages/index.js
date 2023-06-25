import styles from '../styles/Home.module.css'
import MetaData from '../components/MetaData'
import Link from 'next/link'
import PageHead from '../components/PageHead'
import Image from 'next/image'
import ProjectCard from '../components/ProjectCard'

export default function Home() {

  return (
    <div className={styles.containers}>
       {/* a head for the page */}
        <PageHead 
          ogType= "website"
          logo= { MetaData.logo }
          url= { MetaData.url }
        />
        <main className={styles.main}>
          <div className={ styles.header }>
            <h1>Welcome to my website</h1>
            <button className={ styles.message_button } ><Link href="/contact">Get In Touch </Link></button>
          </div>
          <div>
              <Image className={ styles.img } src="/card_image.jpg" alt="Profile pic" width={250} height={250}/>
          </div>
        </main>
        <section>
          <div className={ styles.recent_projects }>
                    <h1>Recent Projects</h1>
                  <div className={ styles.project_cards }>
                    <ProjectCard
                        title="Personal Portfolio Project"
                        description="A website to share info about myself"
                        projectImage="/project_images/portfolio.png"
                        url="/projects/portfolio-project"
                    />
                    <ProjectCard
                        title="Wits Social"
                        description="A chatting app similar to Whatapp"
                        projectImage="/project_images/Social_media_podcast_sharing.png"   
                        url="/projects/wits-social"                
                    />
                    <ProjectCard
                        title="Short Courses System"
                        description="A learning system where the community of wits, 
                        students and staff can create and enrol in courses."
                        projectImage="/project_images/cousers-unsplash.jpg"
                        url="/projects/short-courses"                    
                    />
                  </div>
          </div>
        </section>
    </div>
  )
}
