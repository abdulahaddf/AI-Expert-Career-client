import EventTitle from "../EventTitle/EventTitle";
import pointIcon from '../../../../../public/img/event/icon/Group 594.png';
import b1 from '../../../../../public/img/event/brand/Rectangle 333.png'
import b2 from '../../../../../public/img/event/brand/Rectangle 334.png'
import b3 from '../../../../../public/img/event/brand/Rectangle 335.png'
import b4 from '../../../../../public/img/event/brand/Rectangle 336.png'
import { useContext } from "react";
import { MyContext } from "../../../../Contaxt/Context";
const EventSponsor = () => {

    const {language} = useContext(MyContext)
    const sponsor = [
        {
            id: 0,
            img: b1
        },
        {
            id: 1,
            img: b2
        },
        {
            id: 2,
            img: b3
        },
        {
            id: 3,
            img: b4
        },
        {
            id: 3,
            img: b2
        }
    ]
    return (
        <div className="mt-12">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 py-5">
                    <img src={pointIcon} className='' alt="" />
                    <EventTitle title={language == 'bn' ? 'ইভেন্ট স্পন্সরস' : 'Event Sponsor'} />
                </div>
                <button className="bg-[#D70404] my-btn px-8 py-3 font-semibold text-white rounded-lg">{language == 'bn' ? 'ফ্রি রেজিস্টার করন' : 'Register'}</button>
            </div><br />
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {
                    sponsor.map((item) => <img className="" key={item.id} src={item.img} alt="" />)
                }
            </div>
        </div>
    );
};

export default EventSponsor;