// IMPORT IN REACT
import React, { useContext } from "react";
import { context } from "../../../context";

// IMPORT CSS
import "../Input/Input.css";

// FUNCTION INPUT
export default function Input() {
  const { values } = useContext(context);
  const {
    setUser,
    searchUser,
    foundUsers,
    setSearchUser,
    getInfo,
    setFoundUsers,
  } = values;
  return (
    <>
      <div className="container">
        <div className="d-flex align-align-items-center position-relative">
          <div>
            <input
              className="nav-search"
              type="text"
              placeholder="Search or jump to..."
              value={searchUser}
              onChange={(e) => {
                return (
                  setSearchUser(e.target.value),
                  !searchUser ? setFoundUsers([]) : ""
                );
              }}
              onKeyPress={(e) => {
                e.key.toLowerCase().trim() === "enter" ? getInfo() : "";
              }}
            />
            <ul className="search-items position-absolute pos-ap list-unstyled p-0 m-0 rounded-3">
              {searchUser
                ? foundUsers.map((item) => {
                    return (
                      <li
                        className="search-item py-2 px-2"
                        key={item.id}
                        onClick={(e) => {
                          setUser(item.login), setSearchUser("");
                        }}
                      >
                        {item.login}
                      </li>
                    );
                  })
                : ""}
            </ul>
          </div>
          <p className="bor">/</p>
        </div>
      </div>
    </>
  );
}
