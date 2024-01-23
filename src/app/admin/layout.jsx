import Navbar from "./components/navbar/navbar"
import Sidebar from "./components/sidebar/sidebar"
import styles from "./admin.module.css"
// import Footer from "../ui/dashboard/footer/footer"

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
        <Navbar/>
        {children}
        {/*<Footer/>*/}
      </div>
    </div>
  )
}

export default Layout