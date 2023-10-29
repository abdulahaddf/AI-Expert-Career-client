import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../Context/Context";

const SearchBox = () => {
  const { language } = useContext(MyContext);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  console.log(search);

  useEffect(() => {
    fetch(`http://localhost:5000/find?search=${search}`)
      .then((response) => response.json())
      .then((data) => setResult(data));
  }, []);

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
          name="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBox;
