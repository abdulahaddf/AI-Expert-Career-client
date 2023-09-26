import { useContext } from "react";
import EventDetails from "./EventDetails/EventDetails";
import TicketCart from "./TicketCart/TicketCart";
import { MyContext } from "../../../Contaxt/Context";
import { useEffect } from "react";

const EventTicket = () => {
    const { eventData } = useContext(MyContext)
    // scrollTo
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="mt-[100px]">
            <header className="event-header md:h-[590px] h-[350px] flex items-center justify-center ">
                <div className="">
                    <h4 className="md:text-[40px] text-xl text-center text-white md:h-[50px]">{eventData.date}</h4><br />
                    <h1 className="text-center text-white md:text-[66px] text-3xl font-bold">{eventData.title}</h1>
                </div>
            </header>
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <TicketCart />
                <EventDetails />
            </div>
        </div>
    );
};

export default EventTicket;