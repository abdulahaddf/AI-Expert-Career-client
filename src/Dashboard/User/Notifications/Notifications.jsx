import { useEffect } from "react";
import { useState } from "react";


const Notifications = () => {
    const [notification, setNotification] = useState([]);
    useEffect(() => {
        fetch("https://ai-server-sooty.vercel.app/notifications")
          .then((response) => response.json())
          .then((notification) => setNotification(notification));
      }, [notification]);
    return (
        <div className="w-11/12 mx-auto">
             <h1 className="font-bold text-center text-2xl">Notifications</h1>
        <section>
            {
                notification?.map(n => <div key={n._id}>
                    <div className="section my-2">
                    <h1>{n.title}</h1>
                   <p  dangerouslySetInnerHTML={{ __html: n?.description }}></p>
                    </div>
                </div>)
            }
        </section>
        </div>
    );
};

export default Notifications;