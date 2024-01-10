import styles from "./DefaultLayout.module.css";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const DefaultLayout = () => {
  return (
    <div className={styles.weather}>
      <div className={styles.main}>
        <Header />

        <main className="container text-white z-10">
          {/* Nội dung các trang sẽ load lên ở đây */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
