import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const user = sessionStorage.getItem("user");
  const [show, setShow] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("isLogin");
    window.location.href = "/login";
  };

  return (
    <>
      {show && (
        <div className="modal_menu">
          <button className="btn_logout" onClick={handleLogout}>
            <i className="fa fa-close"></i>
            logout
          </button>
        </div>
      )}

      <nav className="navbar">
        <h3 className="brand">jvalley</h3>

        <div
          className="user_area"
          onClick={() => {
            setShow(!show);
          }}
        >
          <i className="fa fa-user-friends"></i>
          {user}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
