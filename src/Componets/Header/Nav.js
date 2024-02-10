import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOpenSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoCart } from "react-icons/io5";
import { CiCircleRemove } from "react-icons/ci";
import logo from "./logo.png";
import "./Nav.css";

const Nav = ({
  scrollToSection,
  isOpen,
  toggle,
  search,
  handleSearch,
}) => {
  return (
    <div className="nav">
      <div className="nav1">
        <div className="nav2">
          <ul>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Track order</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div className="nav3">
          <a href=" callto:+91 988787787">
            <FaPhoneAlt />{" "}
            <span>+91 0123456789</span>
          </a>
          <a href="mailto:vinishama;raj@gmail.com">
            <IoMailOpenSharp />{" "}
            <span>abc@gmail.com</span>
          </a>
        </div>
      </div>
      <div className="nav-1">
        <div className="nav4">
          <img src={logo} alt="Logo" />
          <h1>Grocery Shop</h1>
        </div>
        <div className="nav5">
          <input
            placeholder="Search Product....."
            value={search}
            onChange={handleSearch}
          />
          <button>Search</button>
        </div>
        <div className="nav6">
          <i onClick={scrollToSection}>
            <IoCart size={25} />
          </i>
          <i onClick={toggle}>
            <CgProfile size={25} />
          </i>
          <div className={`off-canvas ${isOpen ? "off-canvas--open" : ""}`}>
            <div className="off-canvas__overlay" onClick={toggle} />
            <div className="off-canvas__inner">
              <button className="off-canvas__close" onClick={toggle}>
                <CiCircleRemove color="black" size={25} />
              </button>
              <div className="pro">
                <div
                  className="profile"
                  style={{
                    backgroundImage: `url("https://cdn.pixabay.com/photo/2017/10/22/17/54/wolf-2878633_1280.jpg")`,
                  }}
                />
                <div className="details">
                  <h1>Name:John</h1>
                  <h3>Mobile:0123456789</h3>
                  <p>E-mail:abc @gmail.com</p>
                  <h3>Addres:</h3>
                  <p>
                    No:10 ,Near Airpot,<br />
                    Coimbatore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;