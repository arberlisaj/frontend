import { useEffect, useState } from "react";
import { notifications as data } from "../notifications";
import styles from "../styles/styles.module.css";
import Notification from "./Notification";

export default function NotificationsList() {
  const [notifications, setNotifications] = useState([...data]);
  const newNotifications = notifications.filter(
    (n) => n.isNotificationNew === true
  );

  function markAllRead() {
    setNotifications((prevData) =>
      prevData.map((n) =>
        n.isNotificationNew ? { ...n, isNotificationNew: false } : n
      )
    );
  }

  useEffect(() => {
    let x = notifications.filter((n) => n.isNotificationNew).length;
    if (x) document.title = `(${x}) Notifications`;
    else document.title = `Simple Mail`;
  }, [notifications]);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.h1}>
          Notifications
          <span className={styles.span}>{newNotifications.length}</span>
        </h1>
        <button className={styles.btn} onClick={markAllRead}>
          Mark all as read
        </button>
      </header>
      {notifications.map((n, index) => (
        <Notification {...n} key={index} />
      ))}
    </main>
  );
}
