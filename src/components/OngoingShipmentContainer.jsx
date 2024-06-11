import styles from "./OngoingShipmentContainer.module.css";
import { Link } from 'react-router-dom';

const OngoingShipmentContainer = ({ ID_Data }) => {
  return (
    <Link to={`/madmin-confirm-order/${ID_Data}`} className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.shippingIdXxxxxxxxxx}>Shipment ID: {ID_Data}</div>
      <div className={styles.fRAME}>
        <div className={styles.shippingIDLabelParent}>
          <div className={styles.shippingIDLabel} />
          <div className={styles.ongoingShipmentLabelParent}>
            <div className={styles.ongoingShipmentLabel}>
              <div className={styles.sentOnDateLabelParent}>
                <div className={styles.sentOnDateLabel}>
                  <div className={styles.sentOnDateLabelChild} />
                </div>
                <div className={styles.frameItem} />
              </div>
            </div>
            <i className={styles.sentOnDate}>{`Sent on: <Date>`}</i>
          </div>
        </div>
      </div>
      <div className={styles.frameInner} />
    </Link>
  );
};

export default OngoingShipmentContainer;
