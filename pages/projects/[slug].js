import fs from 'fs'
import React from 'react';
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
// import Link from 'next/link'
import MetaData from '../../components/MetaData'
import PageHead from '../../components/PageHead'
import styles from '../../styles/projects.module.css'
// import Image from 'next/image'


export default function Project({ frontmatter: { title, author}, slug, content })
{
    console.log(title)
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
            <main className={ styles.projects }>
                <h1>{ title }</h1>
                <h3  className={ styles.post_date } >Author { author }</h3>
                <div className={ styles.post_body } >
                    <div dangerouslySetInnerHTML={{ __html: marked(content)}} ></div>
                </div>
            </main>
        </div>
    )
}

export async function getStaticPaths() {
    const projects = fs.readdirSync(path.join('posts'))

    const paths = projects.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))
    // const paths = {params : { slug: "javascript-performance-tips" }} 
    console.log(paths)
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const project = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

    const { data: frontmatter, content } = matter(project)
    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}