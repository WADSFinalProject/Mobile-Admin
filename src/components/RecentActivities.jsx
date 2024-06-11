import { Link } from 'react-router-dom';
import styles from "./RecentActivities.module.css";

const recentActivities = () => {
  return (
    <div className={styles.recentActivitiesParent}>
      <div className={styles.recentActivities}>Features</div>
      <Link to="/mharbor-shipping-history" className={styles.linkStyle}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameWrapper}>
            <div className={styles.xxxXxxxxxParent}>
              {/* Content if any */}
            </div>
          </div>
          <div className={styles.bordersContainer} />
        </div>
      </Link>
    </div>
  );
};

export default recentActivities;
