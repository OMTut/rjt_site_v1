import Link from "next/link";

const Links = () => {

    const links = [
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'Resume',
            path: '/resume',
        },
        {
            title: 'Projects',
            path: '/projects',
        },
        {
            title: 'Thoughts',
            path: '/thoughts',
        },
        {
            title: 'Inquire',
            path: '/inquire',
        },
    ];

    return (
        <div>
            {links.map((link=>(
                <Link href={link.path} key={link.title}>{link.title}</Link>
            )))}
        </div>

    )
}

export default Links;