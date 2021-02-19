import NextHead from 'next/head';

interface THead {
    head: {
        title: string,
        description: string,
        canonical: string,
        robots?: boolean
    }
}

export default function Head({ head }: THead) {
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <NextHead>
            <title>{head.title}</title>
            <link rel="icon" type="image/png" href="/favicon.png" />
            <meta name="description" content={head.description} />
            <meta name="robots" content={head.robots === false ? "noindex, nofollow" : "index, follow"} />
            {head.canonical ? <link rel="canonical" href={`https://www.c-doc.co.za${head.canonical}`} /> : null}


            <meta name="author" content="Webdacity" />
            <meta name="copyright" content={`C-DOC © ${currentYear}`} />
            <meta name="theme-color" content="#ffffff" />

            {/* Open Graph */}
            <meta property="og:site_name" content="C-DOC" />
            <meta property="og:title" content={head.title} />
            <meta property="og:description" content={head.description} />
            <meta property="og:type" content="Website" />
            {head.canonical ? <meta property="og:url" content={`https://www.cdoc.co.za${head.canonical}`} /> : null}
            <meta property="og:image" name="image" content="https://www.c-doc.co.za/social.png" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="500" />
            <meta property="og:image:height" content="500" />
            <meta property="og:image:alt" content="C-DOC Logo" />
        </NextHead>
    )
}
