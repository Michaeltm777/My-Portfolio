import Head from "next/head";

export default function SEO({
    title = "Michael Developer - Professional Web, Mobile & Software Developer",
    description = "Professional web, mobile, and software developer. We build powerful, fast, and scalable digital solutions from simple websites to complex enterprise systems.",
    keywords = "web developer, mobile developer, software developer, Next.js, React, Flutter, portfolio",
    ogImage = "/images/portf.png",
    url = "https://yourdomain.com",
    type = "website",
}) {
    const fullTitle = title.includes("Michael Developer") ? title : `${title} | Michael Developer`;

    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Michael Developer" />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content="Michael Developer" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage} />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Michael Developer",
                        jobTitle: "Web, Mobile & Software Developer",
                        description: description,
                        url: url,
                        sameAs: ["https://github.com/Michaeltm777/True-Developer-team", "https://linkedin.com"],
                        knowsAbout: [
                            "Web Development",
                            "Mobile App Development",
                            "Software Development",
                            "Next.js",
                            "React",
                            "Flutter",
                            "Node.js",
                        ],
                    }),
                }}
            />
        </Head>
    );
}
