import { GoDotFill } from "react-icons/go";
import styles from "../styles/styles.module.css";

export default function Notification({
  image,
  isNotificationNew,
  username,
  action,
  platform,
  actionTime,
}) {
  return (
    <div
      className={`${styles.container} ${
        isNotificationNew ? styles.active : ""
      }`}
    >
      <img className={styles.image} src={image} alt="profile" />
      <div>
        <div className={styles.paragraph}>
          <h1>{username}</h1>
          <p>{action}</p>
          <b>{platform}</b>
          {isNotificationNew && <GoDotFill color="#00A9FF" />}
        </div>
        <p className={styles.actionTime}>{actionTime}</p>
      </div>
    </div>
  );
}
