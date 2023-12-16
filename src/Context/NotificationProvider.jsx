import { createContext } from "react";
import { useState, useEffect } from "react";

const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [openedNotifications, setOpenedNotifications] = useState([]);
// console.log(openedNotifications)
const unopenedCount = notifications.length - openedNotifications.length;

useEffect(() => {
    fetchNotifications();
    const intervalId = setInterval(fetchNotifications, 90000);
    return () => clearInterval(intervalId);
  }, [openedNotifications]);

  const fetchNotifications = () => {
    fetch("https://ai-server-sooty.vercel.app/notifications")
      .then((response) => response.json())
      .then((data) => setNotifications(data));
  };
   

  useEffect(() => {
    const storedOpenedNotifications = JSON.parse(localStorage.getItem("openedNotifications")) || [];
    setOpenedNotifications(storedOpenedNotifications);
  }, []); 

  const handleNotificationClick = (notification) => {
      document.getElementById(`${notification._id}`).showModal();
    if (!openedNotifications.includes(notification._id)) {
      setOpenedNotifications((prevOpenedNotifications) => [
        ...prevOpenedNotifications,
        notification._id, 
      ]);
  
      
      const updatedOpenedNotifications = [...openedNotifications, notification._id];
      localStorage.setItem("openedNotifications", JSON.stringify(updatedOpenedNotifications));
    }
  };
  
  const newNotifications = notifications.filter(notification => !openedNotifications.includes(notification._id));
 

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        openedNotifications,
        handleNotificationClick,
        setOpenedNotifications,
        newNotifications,
        unopenedCount ,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationProvider, NotificationContext };
