import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/footer/Footer";


const MainLayout = () => {
  return (
    <div className="">
      <Navbar  />
      <div className=" ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
