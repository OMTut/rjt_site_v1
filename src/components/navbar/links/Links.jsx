"use client";
import { useState } from "react";
import NavLink from "./navLink/NavLink";
import styles from "./links.module.css";
import Image from "next/image";
import { handleLogout } from "@/lib/actions/logout";
import { auth } from "@/lib/auth";

const links = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Resume',
        path: '/docs/resume_Tuttle.pdf',
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

const Links = ({session}) => {
    
    //useState hook
    const [open,setOpen] = useState(false)

    //dummy session/auth data
    
    const isAdmin = true;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link=>(
                    <NavLink item ={link} key={link.title}/>
                )))} {
                    session?.user ? (
                        <>
                        {
                          session.user?.isAdmin && (
                                <NavLink item={{title: 'Admin', path: '/admin'}}/>
                            )
                        }
                        <form action={ handleLogout }>
                          <button className={styles.logout}>Logout</button>
                        </form>
                        </>
                    ) : (
                        <NavLink item={{ title: 'Login', path: '/login'}}/>
                    )
                }
            </div>
            <Image
                className={styles.menuButton}
                src="/menu.png"
                alt="menu image for mobile"
                width={30}
                height={30}
                onClick={() => setOpen((prev) => !prev)}
            />
            {open && (
                <div className={styles.mobileLinks}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
                </div>
            )}
        </div>

    )
}

export default Links;