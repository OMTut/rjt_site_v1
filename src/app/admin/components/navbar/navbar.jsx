"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
  MdLogout,
} from "react-icons/md";
import { handleLogout } from "@/lib/actions/logout";

const Navbar = ({session}) => {
  //useState hook
  const [open,setOpen] = useState(false)

  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
          
          {
                    session?.user ? (
                        <>
                        {
                          session.user?.isAdmin && (
                            //something will go here.
                            "Logged In as Admin"
                            )
                        }
                        <form action={ handleLogout }>
                        
                          <button className={styles.logout}><MdLogout size={20} /></button>
                        </form>
                        </>
                    ) : (
                        //the login stuff went here.
                        "NotLoggedIn"
                    )
                }
        </div>
      </div>
    </div>
  );
};

export default Navbar;