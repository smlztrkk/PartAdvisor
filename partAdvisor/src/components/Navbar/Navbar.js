import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import path from "../../image/Logo.png";
import DropDown from "./DropDown/DropDownMark";
import DropDownMod from "./DropDown/DropDownMod";
import DropDownYil from "./DropDown/DropDownYil";
import DropDownPar from "./DropDown/DropDownPar";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="navbar" src={path} alt="logo" />
      </div>
      <div className="ddmenu">
        <DropDown />
        <DropDownMod />
        <DropDownYil />
        <DropDownPar />
      </div>

      <div className="lctn">
        <div>
          <Link to="/Login">
            <button className="btn button">Giriş Yap</button>
          </Link>
        </div>
        <div>
          <Link to="/Register">
            <button className="btn button">Kayıt Ol</button>
          </Link>
        </div>
        <div>
          <Link to="/">
            <button className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="white"
                class="bi bi-house-door"
                viewBox="0 0 16 16"
              >
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
