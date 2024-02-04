import Links from "./links/Links"
import styles from "./navbar.module.css"
import Image from "next/image"
import { auth } from "@/lib/auth"

const Navbar = async () => {

  const session = await auth();

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src="/logo1_wh.webp" alt="RJT logo" fill/>
            </div>
            <div><Links session={session}/></div>
        </div>
    )
}

export default Navbar