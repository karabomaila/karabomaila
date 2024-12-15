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
            <h1>Welcome to Karabo's website</h1>
            <button className={ styles.message_button } ><Link href="/contact">Get In Touch </Link></button>
          </div>
          <div>
              <Image className={ styles.img } src="/profile-picture.jpeg" alt="Profile pic" width={250} height={250}/>
          </div>
        </main>
        <section>
          <div className={ styles.recent_projects }>
                    <h1>Recent Projects</h1>
                  <div className={ styles.project_cards }>
                    <ProjectCard
                        title="Medical Image Segmentation using Few-shot Learning Methods"
                        description="Evaluating a Cross Attention Transformer model for clinical applications."
                        projectImage="/project_images/fsl_model.jpeg"
                        url="/projects/research-project"
                    />
                    <ProjectCard
                        title="Titanic Survivor Detection"
                        description="A Machine Learning model to predict if a
                        passenger would survive the Titanic ship wreck."
                        projectImage="/project_images/cousers-unsplash.jpg"
                        url="/projects/titanic-model"
                    />
                    <ProjectCard
                        title="Personal Portfolio Project"
                        description="A website to share info about myself"
                        projectImage="/project_images/portfolio.png"
                        url="/projects/portfolio-project"
                    />
                  </div>
          </div>
        </section>
    </div>
  )
}
