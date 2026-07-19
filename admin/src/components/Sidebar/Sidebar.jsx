import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/add">Add Items</NavLink>
        </li>

        <li>
          <NavLink to="/list">List Items</NavLink>
        </li>

        <li>
          <NavLink to="/orders">Orders</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;