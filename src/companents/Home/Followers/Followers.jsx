// IMPORT IN REACT
import { context } from "../../../context";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

// IMPORT CSS
import "../Followers/Followers.css";

// FUNCTION Followers
const Followers = () => {
  const { values } = useContext(context);

  const followers = values.followers;
  console.log(followers);
  return (
    <>
      <div>
        <ul className="followers-list list-unstyled p-0 m-0">
          {followers.map((item) => {
            return (
              <li
                className="opop py-4 d-flex justify-content-between align-items-start"
                key={item.id}
              >
                <div className="item-left d-flex align-items-center gap-3">
                  <img
                    className="rounded-circle"
                    src={item.avatar_url}
                    width="50"
                    height="50"
                  ></img>
                  <div className="item-info">
                    <NavLink
                      className="item-link2 text-decoration-none"
                      onClick={(e) => {
                        values.setUser(item.login);
                      }}
                      to=""
                    >
                      {item.login}
                    </NavLink>
                  </div>
                </div>
                <button className="follow-btn">Unfollow</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Followers;
