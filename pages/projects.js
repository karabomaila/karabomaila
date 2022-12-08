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
                        title="Personal Portfolio Project"
                        description="A website to share info about myself"
                        projectImage="/project_images/portfolio.png"
                    />
                    <ProjectCard
                        title="Wits Social"
                        description="A chatting app similar to Whatapp"
                        projectImage="/project_images/Social_media_podcast_sharing.png"                   
                    />
                    <ProjectCard
                        title="Short Courses System"
                        description="A learning system where the community of wits, 
                        students and staff can create and enrol in courses."
                        projectImage="/project_images/cousers-unsplash.jpg"                    
                    />
                    <ProjectCard
                        title="Escape Room Game"
                        description="Is a game where you answer questions and if you get 
                        them correct you go to the next stage."
                        projectImage="/project_images/chat-png-image.png"                    
                    />
                   <ProjectCard
                        title="Android chatting app"
                        description="A mobile app where users can invite and 
                        chatt to each other, and also see statuses of their friends"
                        projectImage="/project_images/chat-png-image.png"                    
                    />
                </div>
        </div>    
        </div>
    )
}