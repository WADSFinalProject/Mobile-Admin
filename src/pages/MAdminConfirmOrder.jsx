import React, { useState } from 'react';
import styles from "./MAdminConfirmOrder.module.css";
import { useParams, Link } from 'react-router-dom';

const MAdminConfirmOrder = () => {
  const { shippingID } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch('http://127.0.0.1:8000/upload', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();

      setUploadStatus('Upload successful. Photo URL: ' + responseData.photoUrl);
    } catch (error) {
      console.error('Error uploading photo:', error);
      setUploadStatus('Upload failed.');
    }
  };

  return (
    <div className={styles.madminConfirmOrder}>
      <div className={styles.confirmShipmentParent}>
        <div className={styles.confirmShipment}>Confirm Order</div>
        <div className={styles.cancelButton}>
          <Link to="/mharbor-ongoing-shipment" className={styles.cancel}>Cancel</Link>
        </div>
      </div>
      <main className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.shippingDetails}>Shipping details:</div>
        <div className={styles.shippingIdWrapper}>
          <div className={styles.shippingId}>Shipping ID: {shippingID}</div>
        </div>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <section className={styles.dateLabel}>
          <div className={styles.dateParent}>
            <div className={styles.date}>Date</div>
            <div className={styles.reweightedWeighLabel}>
              <label className={styles.uploadImages}>Reweighted Weigh</label>
            </div>
            <div className={styles.imageUploadLabel}>
              <label htmlFor="imageInput" className={styles.uploadImages}>Upload images</label>
              <div className={styles.rectangleGroup}>
                <div className={styles.rectangleDiv} />
                <input id="imageInput" type="file" accept="image/*" onChange={handleFileChange} className={styles.frameChild1} />
              </div>
            </div>
            <div className={styles.receptionNotes}>
              <div className={styles.notesTitle}>Reception Notes</div>
              <textarea className={styles.notesInput} placeholder="Enter notes here..."></textarea>
            </div>
          </div>
        </section>
        <div className={styles.frameWrapper}>
          <button className={styles.sendPickupNotificationWrapper} onClick={handleUpload}>
            <div className={styles.sendPickupNotification}> Confirm </div>
          </button>
        </div>
      </main>
    </div>
  );
};

export default MAdminConfirmOrder;
