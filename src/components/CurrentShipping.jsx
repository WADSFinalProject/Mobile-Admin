import { Link } from 'react-router-dom'; // Ensure this import is at the top
import styles from "./CurrentShipping.module.css";

const currentShipping = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.currentShippingParent}>
          <div className={styles.currentShipping}>Upcoming</div>
          <div className={styles.seeAll}>
            <Link to="/mharbor-ongoing-shipment">{`See all  ->`}</Link>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameContainer}>
            <div className={styles.xxxxXxxxxParent}>
              <div className={styles.xxxxXxxxx}>#XXXX-XXXXX</div>
              <div className={styles.currentLocationParent}>
                <div className={styles.currentLocation}>Current location</div>
                <div className={styles.xxxxxxXxxxxxxx}>Xxxxxx, Xxxxxxxx</div>
              </div>
              <div className={styles.statusParent}>
                <div className={styles.status}>Status</div>
                <div className={styles.inTransit}>In transit</div>
              </div>
            </div>
          </div>
          <div className={styles.frameItem} />
        </div>
      </div>
    </div>
  );
};

export default currentShipping;
