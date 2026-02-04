import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Menu.css";

const Menu = () => {
  const menuClass = "menu";
  const activeMenuClss = "menu selected";

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3001/logout",
        {},
        { withCredentials: true },
      );

      // Optional: clear frontend storage
      localStorage.clear();
      sessionStorage.clear();

      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />

      <div className="menus">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeMenuClss : menuClass
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive ? activeMenuClss : menuClass
              }
            >
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/holdings"
              className={({ isActive }) =>
                isActive ? activeMenuClss : menuClass
              }
            >
              Holdings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/positions"
              className={({ isActive }) =>
                isActive ? activeMenuClss : menuClass
              }
            >
              Positions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/funds"
              className={({ isActive }) =>
                isActive ? activeMenuClss : menuClass
              }
            >
              Funds
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive ? activeMenuClss : menuClass
              }
            >
              Apps
            </NavLink>
          </li>
        </ul>

        <hr />

        {/* PROFILE SECTION */}
        <div className="profile" onClick={() => setOpen(!open)}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>

          {open && (
            <div className="dropdown">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
