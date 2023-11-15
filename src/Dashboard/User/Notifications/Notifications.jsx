import { useContext, useEffect } from "react";
import { AiFillNotification } from "react-icons/ai";
import { NotificationContext } from "../../../Context/NotificationProvider";

const Notifications = () => {
  const { notifications, handleNotificationClick, newNotifications } = useContext(NotificationContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  console.log("notifications:", notifications);
  console.log("newNotifications:", newNotifications);

  return (
    <div className="px-4 md:w-1/2 mx-auto">
      <h1 className="font-bold text-center text-2xl">Notifications</h1>
      <section>
        {notifications?.map((n) => (
          <div
            key={n._id}
            onClick={() => handleNotificationClick(n)}
            className={newNotifications.some((nn) => nn._id === n._id) ? "section my-2 bg-slate-100" : "section my-2"}
          >
            <h1 className="font-semibold flex items-center gap-2 text-xl my-2">
              <AiFillNotification /> {n.title}
            </h1>
            <p
              dangerouslySetInnerHTML={{
                __html: n.description.length > 80 ? n.description.substring(0, 80) + " ..." : n.description,
              }}
            ></p>
            <dialog id={n._id} className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h1 className="font-semibold flex items-center gap-2">
                  <AiFillNotification /> {n.title}
                </h1>
                <p dangerouslySetInnerHTML={{ __html: n.description }}></p>
              </div>
            </dialog>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Notifications;
