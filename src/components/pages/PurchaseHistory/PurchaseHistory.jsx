import { useContext, useEffect } from "react";
import { MyContext } from "../../../Contaxt/Context";

const PurchaseHistory = () => {
    const { language } = useContext(MyContext)
    // scrollTo
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className=" w-full">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#202123] text-white ">
                        <tr className="text-center">
                            <th className="text-center">
                                {language === 'bn' ? "ক্রম নং" : "SI. No"}
                            </th>
                            <th className="text-center">
                                {language === 'bn' ? "কোর্স" : "Course"}
                            </th>
                            <th className="text-center">
                                {language === 'bn' ? "মুল্য" : "Price"}
                            </th>
                            <th className="text-center">
                                {language === 'bn' ? "পেমেন্ট তারিখ" : "Payment Date"}
                            </th>
                            <th className="text-center">
                                {language === 'bn' ? "ইনভইস" : "Invoice"}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th className="text-center">1</th>
                            <td className="text-center">Adobe Photoshop Advance Training</td>
                            <td className="text-center">$8000</td>
                            <td className="text-center">02-06-2023</td>
                            <td className="text-center"><button className="bg-[red] text-white px-3 py-2 rounded-lg my-btn">  {language === 'bn' ? "ডাউনলোড" : "Download"}</button></td>
                        </tr>
                        <tr>
                            <th className="text-center">2</th>
                            <td className="text-center">Adobe Photoshop Advance Training</td>
                            <td className="text-center">$2000</td>
                            <td className="text-center">02-06-2023</td>
                            <td className="text-center"><button className="bg-[red] text-white px-3 py-2 rounded-lg my-btn">  {language === 'bn' ? "ডাউনলোড" : "Download"}</button></td>
                        </tr>
                        <tr>
                            <th className="text-center">3</th>
                            <td className="text-center">Adobe Photoshop Advance Training</td>
                            <td className="text-center">$5000</td>
                            <td className="text-center">02-06-2023</td>
                            <td className="text-center"><button className="bg-[red] text-white px-3 py-2 rounded-lg my-btn">  {language === 'bn' ? "ডাউনলোড" : "Download"}</button></td>
                        </tr>
                        <tr>
                            <th className="text-center">4</th>
                            <td className="text-center">Adobe Photoshop Advance Training</td>
                            <td className="text-center">$4000</td>
                            <td className="text-center">02-06-2023</td>
                            <td className="text-center"><button className="bg-[red] text-white px-3 py-2 rounded-lg my-btn">
                                {language === 'bn' ? "ডাউনলোড" : "Download"}
                            </button></td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PurchaseHistory;