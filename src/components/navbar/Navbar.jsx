import Links from "./links/Links"
import styles from "./navbar.module.css"
import Image from "next/image"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src="/logo1_wh.webp" alt="RJT logo" fill/>
            </div>
            <div><Links/></div>
        </div>
    )
}

export default Navbar