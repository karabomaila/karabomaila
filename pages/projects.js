import MetaData from '../components/MetaData'
import PageHead from '../components/PageHead'
import styles from '../styles/projects.module.css'
import ProjectCard from '../components/ProjectCard';

export default function Projects()
{
    return (
        <div>
            {/* a head for the page */}
            <PageHead 
                title= {"Projects | " + MetaData.siteName }
                description = { MetaData.description}
                ogType= "website"
                logo= { MetaData.logo }
                url= { MetaData.url }
            />
            <div className={ styles.projects }>
                <h1>Projects</h1>
                <div className={ styles.project_cards }>
                    <ProjectCard
                        title="Titanic Survivor Detection"
                        description="A Machine Learning model to predict if a
                        passenger would survive the Titanic ship wreck."
                        projectImage="/project_images/cousers-unsplash.jpg"
                        url="/projects/titanic-model"
                    />
                    <ProjectCard
                        title="Portfolio Project"
                        description="A website to share info about myself and the projects I have worked on"
                        projectImage="/project_images/portfolio.png"
                        url="/projects/portfolio-project"
                    />
                    <ProjectCard
                        title="Wits Social"
                        description="A chatting web app similar to Whatapp"
                        projectImage="/project_images/Social_media_podcast_sharing.png" 
                        url="/projects/wits-social"
                    />

                    <ProjectCard
                        title="Escape Room Game"
                        description="Is a game where you answer questions and if you get 
                        them correct you go to the next stage."
                        projectImage="/project_images/escape.jpg"   
                        url="/projects/escape-room-game"
                    />
                   <ProjectCard
                        title="Android chatting app"
                        description="A mobile app where users can invite and 
                        chart to each other, and also see status of their friends"
                        projectImage="/project_images/chat-png-image.png" 
                        url="/projects/chatting-app"
                    />
                </div>
        </div>    
        </div>
    )
}