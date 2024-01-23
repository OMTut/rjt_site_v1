import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import { getPosts } from "@/lib/data";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
//import { auth, signOut } from "@/app/auth";



const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/admin",
        icon: <MdDashboard />,
      },
      {
        title: "Projects",
        path: "/admin/projects",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Thoughts",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
    ],
  },

];

const Sidebar = async () => {
  //const { user } = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <div className={styles.userDetail}>
          <span className={styles.username}>{/*{user.username}*/}</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
            <li key={cat.title}>
                <span className={styles.category}>{cat.title}</span>
                {cat.list.map((item) => (
                    <MenuLink item={item} key={item.title}/>
                ))}
            </li>
        ))}  
      </ul>

    </div>
  );
};

export default Sidebar;