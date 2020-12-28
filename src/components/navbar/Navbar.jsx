import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  //tangkap user dari data session storage
  const user = sessionStorage.getItem("user");
  //togle button logout
  const [show, setShow] = useState(false);

  //logout
  const handleLogout = () => {
    //hapus isLogin dari session storage
    sessionStorage.removeItem("isLogin");
    //hapus user dari session storage
    sessionStorage.removeItem("user");
    //lempar user kembali ke login
    window.location.href = "/login";
  };

  return (
    <>
      {show && (
        <div className="modal_menu">
          <button className="btn_logout" onClick={handleLogout}>
            <i className="fa fa-sign-out-alt"></i>
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
