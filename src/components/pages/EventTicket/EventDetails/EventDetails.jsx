import { useContext } from 'react';
import cart from '../../../../../public/img/event/cart.jpg';
import { MyContext } from '../../../../Contaxt/Context';


const EventDetails = () => {

    const {language} = useContext(MyContext)

    return (
        <div className="grid md:grid-cols-2 mt-12 gap-12">
            <div className="">
                <h1 className="text-[#000000] text-[30px] font-bold">{language == 'bn' ? 'ইভেন্টের বিবরণ' : 'Event Details'}</h1>
                <p>
                    {language == 'bn' ? 'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aut veniam earum, architecto perferendis amet consequatur. Est aliquam explicabo quae, nihil odit labore sed molestias hic consequatur vel mollitia sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error perferendis minima atque quidem nihil consequatur sequi quae commodi saepe quo, veniam animi necessitatibus et temporibus cum architecto alias praesentium eos. Molestiae voluptatum consequatur vero minus quae veniam aspernatur tempore deleniti? Alias quo blanditiis commodi. Possimus consectetur perspiciatis dignissimos assumenda labore fugiat ratione nam fugit? Fuga qui temporibus exercitationem inventore ullam minima, illum ab molestias deserunt non commodi neque veniam. Deleniti vero sint facilis eos error quas distinctio esse. Quidem minima nisi quis accusamus modi omnis, nostrum quaerat cupiditate voluptate. Soluta, culpa ratione?'}
                </p>
                <img src={cart} className='rounded-xl mt-7' alt="" />
            </div>
            <div className="">
                <form className="bg-white p-10">
                    <h1 className="text-black font-bold text-[27px] ">Register now</h1>
                        <br /><br />
                    <input className='border-b-2 border-[gray] w-full ' type="text" placeholder={language == 'bn' ? 'আপনার পুরো নাম*' : 'enter your name'}/> <br />
                    <input className='border-b-2 border-[gray] w-full mt-9' type="email" placeholder={language == 'bn' ? 'আপনার ইমেইল এড্রেস*' : 'enter your email'}/> <br />
                    <input className='border-b-2 border-[gray] w-full mt-9 text-[#ED1B24]' type="tell" placeholder={language == 'bn' ? 'ফোন নাম্বার *' : 'mobile number'}/> <br />
                    <input className='border-b-2 border-[gray] w-full mt-9' type="password" placeholder={language == 'bn' ? 'আপনার পাসওয়য়ার্ড দিন*' : 'enter your password'}/> <br />
                    
                    <div className="w-40 h-12 text-center pb-[20px] mt-10 mx-auto group relative inline-bloc shadow-lg shadow-gray-600 rounded overflow-hidden border border-[#ED1B24] px-2 py-2 bg-red-600 focus:outline-none focus:ring">
                    
                        <span className="absolute inset-y-0 left-0 w-[2px]  bg-white transition-all group-hover:w-full"></span>

                        <span className="relative text-xl font-bold text-white transition-colors  group-hover:text-red-600">
                            {language == 'bn' ? 'রেজিস্ট্রেশন করুন' : 'Register'}
                        </span>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default EventDetails;