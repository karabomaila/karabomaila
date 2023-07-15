import Head from 'next/head';
import MetaData from './MetaData';

export default function PageHead({ title = MetaData.siteName, description = MetaData.description,
                url = MetaData.url, ogType, logo = MetaData.logo, structuredData, children}){
    
    return (
        <Head>
            <title>{title}</title>
            {/* <meta name="google-site-verification" content="IN46jp8RZq0u1wIxJdb8kN6gEDs7GZzkB0TMOyZ3aY4" /> */}
            {/* <meta charSet='utf-8' /> */}
            <meta name="description" content={ description } />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* <link rel="canonical" href={url} key="canonical" /> */}
            <link rel="icon" href={url} />
            <link rel="icon" href="/favicon.ico" />
            <meta property='og:locale' content="en_US"/>
            <meta property='og:site_name' content={ MetaData.siteName } />
            <meta property='og:description' content={ description } />
            <meta property='og:type' content={ ogType } />
            <meta property='og:image' content={ logo } />
            <meta property='og:url' content={url} />
            {/* <meta name="keywords" content="my, page, keywords" /> */}
            {/* <meta name="robots" content="index, follow" /> */}
            {/* <meta name="author" content="Karabo Maila" /> */}
        </Head>
    )
}
