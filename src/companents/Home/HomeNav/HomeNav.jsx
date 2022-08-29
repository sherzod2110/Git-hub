// IMPORT IN REACT
import React from "react";
import { NavLink } from "react-router-dom";

// IMPORT IMG FULL
import book from "../../../assets/img/book.png";
import book2 from "../../../assets/img/book2.png";
import book3 from "../../../assets/img/book3.png";
import label from "../../../assets/img/label.png";
import star from "../../../assets/img/star.png";

// IMPORT CSS
import "./HomeNav.css";

// IMPORT FUNCTION HOMENAV
const HomeNav = () => {
  return (
    <>
      <div className="home-nav w-100 pt-3 ps-5">
        <ul className="home-list list-unstyled w-100 d-flex justify-content-between gap-5 px-2">
          <li className="list-item2  rounded-3 ">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "item-link text-decoration-none  d-flex align-items-center gap-2 www"
                  : "item-link text-decoration-none  d-flex align-items-center gap-2 ww"
              }
              to="/home"
            >
              <img className="book-img" src={book} alt="" />
              Overwiev
            </NavLink>
          </li>

          <li className="list-item2  rounded-3">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "item-link text-decoration-none  d-flex align-items-center gap-2 www"
                  : "item-link text-decoration-none  d-flex align-items-center gap-2 ww"
              }
              to="/repos"
            >
              <img className="book-img-2" src={book2} alt="" />
              Repositories
            </NavLink>
          </li>

          <li className="list-item2  rounded-3">
            <a className="item-link text-decoration-none  d-flex align-items-center gap-2">
              <img className="book-img-2" src={book3} alt="" />
              Projects
            </a>
          </li>

          <li className="list-item2  rounded-3">
            <a className="item-link text-decoration-none  d-flex align-items-center gap-2">
              <img className="book-img-2" src={label} alt="" />
              Packages
            </a>
          </li>

          <li className="list-item2  rounded-3">
            <a className="item-link text-decoration-none d-flex align-items-center gap-2">
              <img className="book-img-2" src={star} alt="" />
              Stars
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomeNav;
