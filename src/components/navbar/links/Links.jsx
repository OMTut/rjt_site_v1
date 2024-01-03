
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

    //dummy session/auth data
    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.links}>
            {links.map((link=>(
                <NavLink item ={link} key={link.title}/>
            )))} {
                session ? (
                    <>
                    {
                        isAdmin && (
                            <NavLink item={{title: 'Admin', path: '/admin'}}/>
                        )
                    }
                    <button className={styles.logout}>Logout</button>
                    </>
                ) : (
                    <NavLink item={{ title: 'Login', path: '/login'}}/>
                )
            }
        </div>

    )
}

export default Links;