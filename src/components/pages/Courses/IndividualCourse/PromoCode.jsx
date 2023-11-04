/* eslint-disable react/prop-types */
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../../../Context/Context";

const PromoCode = ({ discountAmount, discount, courseFee, course }) => {
  const { language } = useContext(MyContext);
  const [promo, setPromo] = useState([]);
  const [appliedPromo, setAppliedPromo] = useState("");
  const [payable, setPayable] = useState("");
  const [promoUpdate, setUpdate] = useState("");
  useEffect(() => {
    fetch("https://ai-server-sooty.vercel.app/promo")
      .then((response) => response.json())
      .then((data) => setPromo(data));
  }, []);
  // console.log(promo);
  const applyPromoCode = () => {
    const matchingPromo = promo.find((p) => p.promo === appliedPromo);

    if (matchingPromo) {
      const discountPercentage = parseFloat(matchingPromo.discount);
      const discountedAmount = (discountPercentage / 100) * discountAmount;
      const newdiscountAmount = discountAmount - discountedAmount;
      setPayable(newdiscountAmount);

      setUpdate("The Price is reduced by $ " + discountedAmount);
      return newdiscountAmount;
    } else {
      setUpdate("The Promo Code is not valid");
      // Promo code not found
      return discountAmount;
    }
  };
  return (
    <div>
      <section className="text-slate-900 font-semibold my-5 p-1   space-y-5 ">
        <p className=" flex justify-between border-b-2">
          <span className="text-xl">
            {" "}
            {language == "bn" ? "কোর্সের মূল্য:" : "Course Fee:"}
          </span>{" "}
          <span className="line-through text-gray-500 mx-2 text-md">
            ৳ {courseFee}
          </span>{" "}
          <span className="text-xl">৳{discountAmount}</span>
          {/* <span className="text-red-600 ml-4"> Save: {discount}%</span> */}
        </p>
        <div className="flex items-center gap-3 justify-center">
          {" "}
          <input
            type="text"
            placeholder="Enter Promo Code"
            value={appliedPromo}
            onChange={(e) => setAppliedPromo(e.target.value)}
            className="input input-bordered border-primary rounded-none input-sm w-full max-w-[150px] text-black"
          />
          <button
            onClick={() => {
              applyPromoCode();
              // Update the state or perform any other actions if needed
            }}
            className="btn-view btn-sm"
          >
            Apply
          </button>
        </div>
        <p className="text-center font-thin text-slate-600">{promoUpdate}</p>
        {/* TODO _________ change the final amount by fetching the dis count */}
        <p className=" text-xl flex justify-between border-b-2">
          {language == "bn" ? "প্রদেয় মোট:" : "Payable Total:"}
          <span className="font-normal">
            ৳ {payable ? payable : discountAmount}{" "}
          </span>{" "}
        </p>
        <div className="text-center hidden md:block">
          <Link
            to="/enroll"
            state={{ course, payable, discountAmount, courseFee }}
            className="btn-view-red"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PromoCode;
