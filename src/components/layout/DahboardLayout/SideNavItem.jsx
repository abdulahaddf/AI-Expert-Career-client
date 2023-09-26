import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const SideNavItem = ({ item }) => {
  return (
    <NavLink className={`h-[50px] px-[18px] flex items-center w-full`}>
      <li>{item}</li>
    </NavLink>
  );
};

SideNavItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default SideNavItem;
