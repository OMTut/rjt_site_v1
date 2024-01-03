
import NavLink from "./navLink/NavLink";
import styles from "./links.module.css";

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
        <div className={styles.links}>
            {links.map((link=>(
                <NavLink item ={link} key={link.title}/>
            )))}
        </div>

    )
}

export default Links;