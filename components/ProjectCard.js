import Image from "next/image";
import styles from '../styles/projects.module.css'
import { useRouter } from 'next/router'

const ProjectCard = ({title, description, projectImage, url}) =>
{ 
    const router = useRouter()

    const handleOnclick = (e, path) => {
        e.preventDefault()

        router.push(path)
    }
    return (
        <div className={styles.project_card} onClick={ (e) => handleOnclick(e, url) } >
                <Image className={ styles.img } src={ projectImage } alt="project pic" width={200} height={200} />
                <h2 className={ styles.card_title }>{ title }</h2>
                <p className={styles.card_description}>{description}</p>
            </div>
    
    )
}

export default ProjectCard;