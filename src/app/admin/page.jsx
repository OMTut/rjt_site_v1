// import { cards } from "../lib/data";
// import Card from "../ui/dashboard/card/card";
// import Chart from "../ui/dashboard/chart/chart";
import styles from "./admin.module.css";

const Dashboard = () => {
  return (
    <div className={styles['wrapper-admin']}>
      <div className={styles['main-dashboard']}>
        <div className={styles['cards-admin']}>
          {/*}
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
          */}
        </div>
        <p>This is the main admin dashboard</p>
      </div>
    </div>
  );
};

export default Dashboard;