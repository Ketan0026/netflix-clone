import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName, setSignOutState } from "../../features/user/userSlice";
import { auth } from "../../firebase";

function Header() {
  const [searchBar, setSearchBar] = useState(false);
  const [input, setInput] = useState("");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scroll, setScroll] = useState("");
  const [activeTab, setActiveTab] = useState("Home");
  const userName = useSelector(selectUserName);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname.startsWith("/explore")) {
      setActiveTab(pathname.split("/")[2]);
    } else {
      setActiveTab("home");
    }
  }, [location.pathname]);

  const controlNavbar = () => {
    if (window.scrollY > 1) {
      setScroll("scrolled");
    } else {
      setScroll("");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const showSearchBar = () => {
    setSearchBar(!searchBar);
  };
  const closeSearchBar = () => {
    if (!input) {
      setSearchBar(!searchBar);
    }
  };
  const clearInput = () => {
    setInput("");
  };
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && input.length > 0) {
      navigate(`/search/${input}`);
    }
  };
  useEffect(() => {
    if (searchBar && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchBar, input]);

  const handleSignOut = () => {
    if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };
  const navigationHandler = (type) => {
    setActiveTab(type);
    if (type === "home") {
      navigate("/home");
    } else if (type === "movie") {
      navigate("/explore/movie");
    } else if (type === "tv") {
      navigate("/explore/tv");
    } else if (type === "subscription") {
      navigate("/subscription");
    }
  };

  return (
    <div className={`Navbar ${scroll ? "scrolled" : ""}`}>
      <a href="/home">
        <img className="logo" src="/images/logo.svg" alt="" />
      </a>
      <ul className="primary-navigation">
        <li className="navigation-menu">
          <a
            className="menu-trigger"
            href="/home"
            onClick={(e) => e.preventDefault()}
          >
            Browse
          </a>
          <div className="sub-menu">
            <div className="callout-arrow"></div>
            <div className="topbar"></div>
            <ul className="sub-menu-list">
              <li className="sub-menu-item">
                <a
                  onClick={() => navigationHandler("home")}
                  className={activeTab === "home" ? "current" : ""}
                  href=""
                >
                  Home
                </a>
              </li>
              <li className="sub-menu-item">
                <a
                  onClick={() => navigationHandler("tv")}
                  className={activeTab === "tv" ? "current" : ""}
                  href=""
                >
                  TV Shows
                </a>
              </li>
              <li className="sub-menu-item">
                <a
                  className={activeTab === "movie" ? "current" : ""}
                  onClick={() => navigationHandler("movie")}
                  href=""
                >
                  Movies
                </a>
              </li>
              <li className="sub-menu-item">
                <a
                  className={activeTab === "subscription" ? "current" : ""}
                  onClick={() => navigationHandler("subscription")}
                  href=""
                >
                  Subscription
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="navigation-tab">
          <a
            onClick={() => navigationHandler("home")}
            className={activeTab === "home" ? "current" : ""}
            href=""
          >
            Home
          </a>
        </li>
        <li className="navigation-tab">
          <a
            className={activeTab === "movie" ? "current" : ""}
            onClick={() => navigationHandler("movie")}
            href=""
          >
            Movies
          </a>
        </li>
        <li className="navigation-tab">
          <a
            className={activeTab === "tv" ? "current" : ""}
            onClick={() => navigationHandler("tv")}
            href=""
          >
            TV Shows
          </a>
        </li>
        <li className="navigation-tab">
          <a
            className={activeTab === "subscription" ? "current" : ""}
            onClick={() => navigationHandler("subscription")}
            href=""
          >
            Subscription
          </a>
        </li>
      </ul>
      <div className="secondary-navigation">
        <div className="nav-element">
          <div className="searchBox">
            <button
              onClick={showSearchBar}
              className={`searchTab ${searchBar ? "hide" : ""}`}
            >
              <img src="/images/search-icon.svg" alt="" />
            </button>
            <div className={`searchInput ${searchBar ? "" : "hide"}`}>
              <img
                className="search-icon"
                src="/images/search-icon.svg"
                alt=""
              />
              <label className="visually-hidden"></label>
              <input
                type="text"
                maxLength="80"
                placeholder="Movies, shows and more"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                ref={inputRef}
                onBlur={closeSearchBar}
                onKeyUp={searchQueryHandler}
              />
              <span
                onClick={clearInput}
                className={`icon-close ${input ? "" : "hidden"}`}
              >
                <img src="/images/close-icon.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="nav-element">
          <div className="account-menu-item">
            <div className="account-dropdown-button">
              <a href="">
                <span className="profile-link">
                  <div className="avatar-wrapper">
                    <img
                      className="profile-icon"
                      src="/images/avatar.jpg"
                      alt=""
                    />
                    <div className="callout-arrow"></div>
                  </div>
                </span>
              </a>
              <span className="caret"></span>
            </div>
            <div className="account-drop-down sub-menu">
              <div className="ptrack-content">
                <div className="topbar"></div>
                <ul className="sub-menu-list sign-out-links">
                  <li onClick={handleSignOut} className="sub-menu-item">
                    <a href="/" className="sub-menu-link">
                      Sign Out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
