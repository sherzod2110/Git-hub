// IMPORT CSS
import "../Navbar/Navbar.css";

// IMPORT FUUL IMG
import logo from "../../../assets/img/logo.png";
import rell from "../../../assets/img/rell.png";
import plus from "../../../assets/img/plus.png";
import my from "../../../assets/img/my.jpg";

// IMPORT IN REACT
import { NavLink as Link } from "react-router-dom";
import Input from "../Input/Input";

// FUNCTION NAVBAR
export default function Navbar() {
  return (
    <> 
      <div className="bg-2">
        <div className="container-fluid">
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-4 align-items-center">
              <Link to="/home">
                <img
                  className="rounded-pill"
                  src={logo}
                  alt=""
                  width={40}
                  height={40}
                />
              </Link>
              <div>
                <Input />
              </div>
              <div>
                {/* <input
                  className="nav-search"
                  type="text"
                  placeholder="Search or jump to..."
                  
                /> */}
              </div>
              <ul className="list-unstyled d-flex gap-4 m-0">
                <li className="list-item">Pull requests</li>
                <li className="list-item">Issues</li>
                <li className="list-item">Marketplace</li>
                <li className="list-item">Explore</li>
              </ul>
            </div>

            <div className="d-flex gap-3 align-items-center">
              <img className="rell" src={rell} alt="" />
              <img
                className="img-plus"
                src={plus}
                alt=""
                width={19}
                height={19}
              />
              <div className="d-flex align-items-center">
                <nav>
                  <div>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasNavbar"
                      aria-controls="offcanvasNavbar"
                    >
                      <span className="navbar-toggler-icon">
                        <img
                          className="rounded-pill"
                          src={my}
                          alt=""
                          width={23}
                          height={23}
                        />
                      </span>
                      <span className="dropdown-caret ms-1"></span>
                    </button>
                    <div
                      className="bg-dark offcanvas offcanvas-end"
                      style={{ width: "250px" }}
                      tabindex="-1"
                      id="offcanvasNavbar"
                      aria-labelledby="offcanvasNavbarLabel"
                    >
                      <div className="offcanvas-header">
                        <h5
                          className="offcanvas-title"
                          id="offcanvasNavbarLabel"
                        >
                          Menu
                        </h5>
                        <button
                          type="button"
                          className="btn-close rere"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                          <ul className="m-0 list-unstyled">
                            <li className="ps-5 mb-2">
                              <img
                                className="rounded-pill"
                                src={my}
                                alt=""
                                width={60}
                                height={60}
                              />
                            </li>
                            <li className="sign-out">Signed in as</li>
                            <li className="sign-out boder-w">Sherzod</li>
                            <li className="sign-out">Your Profile</li>
                            <li className="sign-out">Your Repositories</li>
                            <li className="sign-out">Your Codespaces</li>
                            <li className="sign-out">Your Project</li>
                            <li className="sign-out">Your Starts</li>
                            <li className="sign-out">Your Gists</li>
                            <li className="sign-out">Apgrade</li>
                            <li className="sign-out">Help</li>
                            <li className="sign-out">Settings</li>
                          </ul>
                          <Link
                            className="sign-out text-decoration-none "
                            to="/"
                          >
                            Log Out
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
