// IMPORT COMPONENTS
import Navbar from "./Navbar/Navbar";
import Followers from "./Followers/Followers";
import Following from "./Following/Following";
import HomeNav from "./HomeNav/HomeNav";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import PinnedRepos from "./PinnedRepos/PinnedRepos";
import Repos from "./Repos/Repos";

// IMPORT CSS
import "../Home/Home.css";

// IMPORT IN REACT
import { Route, Routes, Outlet } from "react-router-dom";

// FUNCTION HOME
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bck-color">
        <div className="container d-flex">
          <Profile />
          <div className="flex-column">
            <HomeNav />
            <Routes>
              <Route
                path="/followers"
                element={
                  <div style={{ width: "100%", marginLeft: "59px" }}>
                    <Followers />
                  </div>
                }
              />
              <Route
                path="/following"
                element={
                  <div style={{ width: "100%", marginLeft: "59px" }}>
                    <Following />
                  </div>
                }
              />
              <Route
                path="/home"
                element={
                  <div style={{ width: "900px", marginLeft: "59px" }}>
                    <PinnedRepos />
                  </div>
                }
              />
              <Route
                path="/repos"
                element={
                  <div style={{ width: "900px", marginLeft: "59px" }}>
                    <Repos />
                  </div>
                }
              />
            </Routes>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
