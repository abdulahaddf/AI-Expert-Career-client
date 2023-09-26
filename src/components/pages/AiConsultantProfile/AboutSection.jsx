import { useContext } from "react";
import { MyContext } from "../../../Contaxt/Context";

const AboutSection = () => {

    const {language} = useContext(MyContext)

    return (
        <div>
            <h2 className="text-[30px] font-bold mt-7">{language == 'bn' ? 'কন্সাল্টেন্টের বিবরণ' : 'About'}</h2>
            <p className="text-xl lg:text-2xl font-medium mt-2.5">Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimesLorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimesLorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimesLorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimesLorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years</p>
            <h2 className="text-[30px] font-bold mt-7">{language == 'bn' ? 'সাম্প্রতিক কাজের উদাহরণ' : 'Examples of name’s recent client work'}</h2>
            <ul className="space-y-7 ml-12 mt-12">
                <div className="flex">
                    <div className="w-7 mr-7 mt-1">
                        <div className="bullet"></div>
                    </div>
                    <li className="text-xl font-medium ">Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes</li>
                </div>
                <div className="flex">
                    <div className="w-7 mr-7 mt-1">
                        <div className="bullet"></div>
                    </div>
                    <li className="text-xl font-medium ">Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes</li>
                </div>
                <div className="flex">
                    <div className="w-7 mr-7 mt-1">
                        <div className="bullet"></div>
                    </div>
                    <li className="text-xl font-medium ">Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes</li>
                </div>

            </ul>
            <hr className="border-[0.5] mt-8 border-black" />


            <div>
                <h2 className="text-[30px] font-bold mt-[30px]">{language == 'bn' ? 'সমসাময়িক সফলতাগুলো' : 'Recent Success'}</h2>
                <div className="ml-[50px] space-y-4 mt-[30px]">
                    <p className="font-semibold lg:text-[30px]">“Lorem Ipsum as their default model text, and a search for 'lorem ipsum' ”</p>
                    <p className="font-semibold lg:text-[30px]">“Lorem Ipsum as their default model text, and a search for 'lorem ipsum' ”</p>
                </div>
            </div>
            <hr className="border-[0.5] mt-12 border-black" />
            <h2 className="text-[30px] font-bold my-[30px]">{language == 'bn' ? 'অভিজ্ঞতা' : 'Experience'}</h2>
            <div className="ml-[50px]">
                <p className="font-semibold lg:text-[24px]">United Stand Artificial Intelligence Institute (USAII)</p>
                <p className="font-semibold lg:text-[24px]">Ai Research & Ai Technical Lead Manager</p>
            </div>
            <h2 className="text-[30px] font-bold my-[30px]">{language == 'bn' ? 'শিক্ষাগত যোগ্যতা' : 'Educational Qualification'}</h2>
            <div className="ml-[50px] space-y-5">
                <p className="font-semibold lg:text-[24px]">M.sc in Computer Science & Engineering (CSE) - 2002</p>
                <p className="font-semibold lg:text-[24px]">B.sc in Computer Science & Engineering (CSE) - 1998</p>
                <p className="font-semibold lg:text-[24px]">Higher Secondary School Certificate (HSC) - 1994</p>

            </div>
            <hr className="border-[0.5] mt-8 mb-36 border-black" />
        </div>
    );
};

export default AboutSection;