import MetaData from '../components/MetaData'
import PageHead from '../components/PageHead'

export default function Blog()
{
    return (
        <div>
            {/* a head for the page */}
            <PageHead 
                title= {"Blog | " + MetaData.siteName }
                description = { MetaData.description}
                ogType= "website"
                logo= { MetaData.logo }
                url= { MetaData.url }
            />
            <h1>Blog posts</h1>
            <h3>Still Working on it</h3>
        </div>
    )
}