
import { Link } from "react-router-dom";
import Logo from "./ai expert career logo red white.svg";


import footerBG from "./ai expert career icon white.svg";
import { useContext } from "react";
import { MyContext } from "../../../Contaxt/Context";


const Footer = () => {
    const {  language } = useContext(MyContext);
  return (
    <div className="bg-[#000000] ">
      <div className="pt-20 pb-10 px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl md:px-24 lg:px-20 2xl:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 text-white text-center sm:text-start ">
          <div className="col-span-2 2xl:p-4 pr-">
            <Link to="/" className="">
              <img className="select-none pointer-events-none no-select unselectable" src={Logo} alt="" />
            </Link>
            <h4 className="text-white font-bold text-[18px] my-[36px]">
              Ai Expert Career, aims to promote the adoptation and awareness of Artificial Intelligence (AI) in
              Bangladesh We believe that AI has the potential to revolutionize various indusstries in Bangladesh.
            </h4>
            <div className="flex justify-center lg:justify-start items-center gap-4 ">
              
              <a target="_blank" href="www.facebook.com"  className="rounded-full border-red-600 border border-dashed p-0.5">
                 <img className="w-12" src='https://www.svgrepo.com/show/452196/facebook-1.svg' alt="" />
              </a>
              <a target="_blank" href="www.facebook.com"  className="rounded-full border border-dashed p-0.5">
                 <img className="w-12" src={'https://www.svgrepo.com/show/452231/instagram.svg'} alt="" />
              </a>
              <a target="_blank" href="www.facebook.com"  className="rounded-full border border-dashed p-0.5">
                 <img className="w-12" src='https://www.svgrepo.com/show/452051/linkedin.svg' alt="" />
              </a>
              <a target="_blank" href="www.facebook.com"  className="rounded-full border border-dashed p-0.5">
                 <img className="w-12" src='https://www.svgrepo.com/show/354560/whatsapp.svg' alt="" />
              </a>
              <a target="_blank" href="www.facebook.com"  className="rounded-full border border-dashed p-0.5">
                 <img className="w-12" src='https://www.svgrepo.com/show/452138/youtube.svg' alt="" />
              </a>
            
          
            </div>
          </div>
          <div className="space-y-[30px]">
            <div>
              <h2 className="text-[22px] font-bold text-[#ED1B24] mb-3">{language=='bn'?'কুইক লিংক': "Quick link"}</h2>
              <div className="flex flex-col gap-2 text-[18px]">
                <p>
                  <a href="https://forum.solana.com/" target="_blank" rel="noopener noreferrer">
                  {language!=='bn'? 'Project & Products': 'প্রজেক্ট ও প্রডাক্টস'}  
                  </a>
                </p>
                <p>
                  <a href="https://discord.com/invite/kBbATFA7PW" target="_blank" rel="noopener noreferrer">
                   {language=='bn'? 'ফ্রি কোর্স': 'Free Course'}
                  </a>
                </p>
                <p>
                  <a href="https://discord.com/invite/kBbATFA7PW" target="_blank" rel="noopener noreferrer">
                 {language=='bn'? 'ব্লগ ও রিসোর্সেস': 'Blogs And Resources'}   
                  </a>
                </p>
                <p>
                  <a href="https://discord.com/invite/kBbATFA7PW" target="_blank" rel="noopener noreferrer">
                 {language=='bn'? "আমাদের সম্পর্কে " :" About Us"}  
                  </a>
                </p>
                <p>
                  <a href="https://discord.com/invite/kBbATFA7PW" target="_blank" rel="noopener noreferrer">
                   {language=='bn'? 'কনসালট্যান্ট হিসেবে যুক্ত হতে চান?': 'Contract with a as a Consultant'}
                  </a>
                </p>
                <p>
                  <a href="https://discord.com/invite/kBbATFA7PW" target="_blank" rel="noopener noreferrer">
                   {language=='bn'? 'একাডেমিক এসোসিয়েট হতে চান?': 'Contract with as a Acadamic Assistant'}
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-[22px] font-bold text-[#ED1B24] mb-3">{language=='bn'?'আরো কিছু': 'Extras'}</h2>
              <div className="flex flex-col gap-2 text-[18px]">
                <p>
                  <a href="https://forum.solana.com/" target="_blank" rel="noopener noreferrer">
                    {language=='bn'? 'সাপোর্ট ও জরুরি সেবা':'Help & Support'}
                  </a>
                </p>
                <p>
                  <a href="https://discord.com/invite/kBbATFA7PW" target="_blank" rel="noopener noreferrer">
                    {language=='bn'? 'ডিস্ক্লেইমার':"Disclaimers"}
                  </a>
                </p>
                <p>
                  <a href="https://discord.com/invite/kBbATFA7PW" target="_blank" rel="noopener noreferrer">
                   {language=='bn'? 'টার্মস এন্ড কন্ডিশন' :'Terms and Conditions'}
                  </a>
                </p>
                <p>
                  <a href="https://discord.com/invite/kBbATFA7PW" target="_blank" rel="noopener noreferrer">
                    {language=='bn'? 'প্রাইভেসি পলিসি':'Privacy policy'}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-[60px]">
            <div>
              <h2 className="text-[22px] font-bold text-[#ED1B24] mb-3">Contact information</h2>
              <div className="flex flex-col gap-2 text-[18px]">
                <p>
                  <a href="https://forum.solana.com/" target="_blank" rel="noopener noreferrer">
                    Email: aiexpertcareer.info@gmail.com
                  </a>
                </p>
                <p>
                  <a href="https://discord.com/invite/kBbATFA7PW" target="_blank" rel="noopener noreferrer">
                    Address: 6A, 152/2K, panthapath
                  </a>
                </p>
                <p>
                  <a href="https://discord.com/invite/kBbATFA7PW" target="_blank" rel="noopener noreferrer">
                    Dhaka - 1205, Bangladesh
                  </a>
                </p>
                <p>
                  <a href="https://discord.com/invite/kBbATFA7PW" target="_blank" rel="noopener noreferrer">
                    Cell: +8801724866855, +8801995536898
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-[22px] font-bold text-[#ED1B24] mb-3">
              {language=='bn'? "এ আই সম্পর্কিত আপডেট থাকতে সাবস্ক্রাইব করুন":'  Subscribe to our newsletter Enter your email Subscribe'}
              </h2>
              <form className="flex flex-col items-center w-full mb-4 md:flex-row ">
                <input
                  placeholder={language=='bn'?'ইমেইল এড্রেস প্রদান করুন':"Enter your email"}
                  required=""
                  type="text"
                  className="flex-grow bg-black w-full h-12 px-4 mb-3 transition duration-200 border-2 border-[#ED1B24] shadow-sm rounded-l-md appearance-none md:mb-0 focus:border-[#ED1B24] focus:outline-none focus:shadow-outline"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition rounded-r-md duration-200 shadow-md md:w-auto bg-[#ED1B24] focus:shadow-outline focus:outline-none"
                >
                 {language=='bn'?'সাবস্ক্রাইভ':" Subscribe"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div>
          <p className="mt-20 lg:text-[18px] font-bold text-white">{language=='bn'?"সর্বস্বত্ত সংরক্ষিত - Ai Expert Career - 2020":"All Right researved by Ai Expert Career - 2020"}</p>
        </div>
        <img className="absolute bottom-0 right-0 w-72 z-50" src={footerBG} alt="" />
      </div>
    </div>
   
  );
};

export default Footer;