// IMPORT IN REACT
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";

// IMPORT COMPONENTS
import Login from "./companents/Login/Login";
import Home from "./companents/Home/Home";
import { Api } from "./companents/API/API";
import { context } from "./context";

// IMPORT CSS
import "./App.css";

// FUNCTION APP
function App() {
  const { getUser, getRepo, getFollowers, getUsers } = Api;

  const [user, setUser] = useState("sherzod2110");

  const [userInfo, setUserInfo] = useState([]);
  const [repos, setRepos] = useState([]);
  const [staticRepos, setstaticRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [foundUsers, setFoundUsers] = useState([]);

  const [searchRepo, setSearchRepo] = useState("");
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    getUser(user).then((res) => setUserInfo(res.data));
    getRepo(user).then((res) => {
      return setRepos(res.data), setstaticRepos(res.data);
    });
    getFollowers(user).then((res) => setFollowers(res.data));
  }, [user]);

  const getInfo = useCallback(() => {
    searchUser
      ? getUsers(searchUser).then((res) => setFoundUsers(res.data.items))
      : setFoundUsers([]);
  }, [searchUser]);

  useEffect(() => {
    const regex = new RegExp(searchRepo, "gi");
    searchRepo
      ? setRepos(
          staticRepos.filter((item) => {
            return item.name.match(regex);
          })
        )
      : setRepos(staticRepos);
  }, [searchRepo]);

  const values = {
    userInfo,
    repos,
    followers,
    foundUsers,
    searchRepo,
    searchUser,
    setSearchUser,
    setSearchRepo,
    setFoundUsers,
    setUser,
    getInfo,
  };

  const { pathname } = useLocation();


  
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  const user2 = {
    username: "sherzod",
    password: "007700",
  };

  const useAuth = (params) => {
    return user2.username === params.userName &&
      user2.password === params.password
      ? navigate("/home")
      : navigate("/");
  };

  return (
    <>
      <context.Provider value={{ values }}>
        <main>
          {pathname === "/" ? (
            <Login isLogin={auth} login={useAuth} />
          ) : (
            <Home />
          )}

          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Routes> */}
          {/* <Route
              path="/"
              element={<Login isLogin={auth} login={useAuth} />}
            /> */}
          {/* <Route path="/followers" element={<Followers />} />
            <Route path="/pinned" element={<PinnedRepos />} /> */}
          {/* </Routes> */}
        </main>
      </context.Provider>
    </>
  );
}

export default App;
