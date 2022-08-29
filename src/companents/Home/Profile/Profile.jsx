// IMPORT IN REACT
import { context } from "../../../context";
4;
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import person from "../../../assets/img/person.png";

// IMPORT CSS
import "./Profile.css";

// IMPORT FUNCTION
const Profile = () => {
  const { values } = useContext(context);
  const userInfo = values.userInfo;

  const [follow, setFollow] = useState(false);
  return (
    <>
      <div className="bg-rang pt-5" style={{ width: "285px" }}>
        <div className="profile-info">
          <div className="sidebar-img position-relative">
            <img
              className="profile-img"
              src={userInfo.avatar_url}
              width="280"
              height="280"
            ></img>
          </div>
          <div className="mt-3 mb-3">
            <p className="h4 m-0 mb-1 text-my">{userInfo.name}</p>
            <p className="h5 text-secondary fw-normal m-0 my-login">
              {userInfo.login}
            </p>
          </div>
        </div>
        <button className="status-btn btn btn-light d-none justify-content-start align-items-center w-100 border rounded-3 mb-3">
          <p className="btn-text m-0 ms-1">Set status</p>
        </button>
        <button
          className="edit-btn d-block w-100 border rounded-3 mb-3"
          onClick={() => setFollow((e) => !e)}
        >
          {follow ? "Unfollow" : "Follow"}
        </button>
        <p className="text-dark fw-normal m-0 mb-2">{userInfo.bio}</p>
        <div className="d-flex align-items-center">
          <img className="persons" src={person} alt="" width={25} height={25} />
          <NavLink
            className="followers-link text-decoration-none follo"
            to="/followers"
          >
            <span className="text-light">{userInfo.followers}</span> Followers
          </NavLink>
          {` · `}
          <NavLink
            className="followers-link text-decoration-none follo ms-2"
            to="/following"
          >
            <span className="text-light">{userInfo.following}</span> Follwing
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Profile;
