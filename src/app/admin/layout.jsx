import Navbar from "./components/navbar/navbar"
import Sidebar from "./components/sidebar/sidebar"
import styles from "./admin.module.css"
import { auth } from "@/lib/auth"
// import Footer from "../ui/dashboard/footer/footer"

const session = await auth();

const Layout = ({children}) => {
  return (
    <div className={styles['container-admin']}>
      <div className={styles['menu']}>
        <Sidebar/>
      </div>
      <div className={styles['content']}>
        <Navbar session={session}/>
        <div className={styles['main-admin']}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout