// IMPORT IN REACT
import { context } from "../../../context";
import React, { useContext } from "react";

// IMPORT CSS
import "./PinnedRepos.css";

// IMPORT FUNCTION
const PinnedRepos = () => {
  const { values } = useContext(context);
  const { repos } = values;
  return (
    <>
      <div className="pinned-repos mt-4 position-relative">
        <div className="repos-top d-flex flex-row justify-content-between align-items-center mb-3">
          <p className="title m-0 d-in">Popular repositories</p>
          <p className="text m-0">Customize your pins</p>
        </div>
        <ul className="repos-list list-unstyled d-flex flex-wrap align-items-center justify-content-between p-0 m-0">
          {repos.slice(0, 6).map((item) => {
            return (
              <li className="repos-item  card p-3 mb-3" key={item.id}>
                <div className="item-top d-flex justify-content-between align-items-center mb-4">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <p className="m-0">
                      <a
                        className="repo-title text-decoration-none m-0"
                        href={item.html_url}
                      >
                        {item.name}
                      </a>
                    </p>
                    <p className="repo-type m-0">{item.visibility}</p>
                  </div>
                </div>
                <div className="item-bottom">
                  <p
                    className={`repo-language m-0 ${
                      item.language === "JavaScript"
                        ? "yellow"
                        : item.language === "HTML"
                        ? "red"
                        : item.language === "CSS"
                        ? "purple"
                        : ""
                    }`}
                  >
                    {item.language}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default PinnedRepos;
