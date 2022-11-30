import Image from "next/image";
import styles from '../styles/projects.module.css'

const ProjectCard = ({title, description, projectImage}) =>
{ 
    return (
            <div className={ styles.project_card }>
                <Image className={ styles.img } src={ projectImage } alt="project pic" width={200} height={200} />
                <h2 className={ styles.card_title }>{ title }</h2>
                <p className={ styles.card_description }>{ description }</p>
            </div>
    
    )
}

export default ProjectCard;