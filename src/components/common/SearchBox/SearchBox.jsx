import { useContext } from "react";
import { MyContext } from "../../../Context/Context";

const SearchBox = () => {
  const { language } = useContext(MyContext);
  return (
    <div className="hidden md:block">

    <div className=" flex items-center mr-32 ">
      <input
        className="px-4 bg-white text-xs rounded-full w-[250px] h-[41px] relative border-black/25 border-2"
        placeholder={
          language === "bn"
            ? "পছন্দের কোর্সগুলো খুঁজুন"
            : "Search your favorite courses"
        }
        type="search"
        name="jobSearch"
        id=""
        />
    </div>
        </div>
  );
};

export default SearchBox;
