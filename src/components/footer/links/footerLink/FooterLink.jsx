"use client";
import Link from "next/link";
import styles from "./footerLink.module.css";
import { usePathname } from "next/navigation";

const FooterLink = ({item}) => {

    const pathName = usePathname();

    return (
        <Link 
            href={item.path} 
            className={`${styles.container} ${
                pathName===item.path}`}
        >
            {item.title}
        </Link>
    )
}

export default FooterLink