"use client";
import FooterLink from "./footerLink/FooterLink";
import styles from "./links.module.css";

const footerLinks = [
    {
        title: 'Github',
        path: 'https://github.com/OMTut',
    },
    {
        title: 'LinkedIn',
        path: 'https://www.linkedin.com/in/rjtuttle/',
    },
];

const Links = () => {

    return (
        <div className={styles.footerLinks}>
            <div className={styles.links}>
                {footerLinks.map((link=>(
                    <FooterLink item ={link} key={link.title}/>
                )))} 
            </div>
            

        </div>

    )
}

export default Links;