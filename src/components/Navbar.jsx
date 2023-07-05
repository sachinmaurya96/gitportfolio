import React from "react";
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { BsBook } from "react-icons/bs";
import { BiBookBookmark } from "react-icons/bi";
import { AiOutlineFundProjectionScreen,AiOutlineProfile } from "react-icons/ai";
import { LuContact } from "react-icons/lu";
import { GoProjectSymlink } from "react-icons/go";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="https://cdn.icon-icons.com/icons2/3053/PNG/512/microsoft_sharepoint_alt_macos_bigsur_icon_189964.png"
              alt=""
              width="40"
              height="40"
              className="d-inline-block align-text-top"
            />
            portfolio
          </a>
          <div className="social d-flex">
            <div className="github">
              <a href="https://github.com/sachinmaurya96"><RxGithubLogo size={30} title="github"/></a>
            </div>
            <div className="linkdin">
              <a href="https://www.linkedin.com/in/sachin-maurya-826111267/"><RxLinkedinLogo size={30} title="linkdin"/></a>
            </div>
            <div className="cgprofile">
             <NavLink to="resume"> <CgProfile size={30} title="Profile"/></NavLink>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-2">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">
                <GoProjectSymlink/> Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ripo">
                 <BsBook/> Repository
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="front">
                 <BiBookBookmark/> Frontend projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="back">
                <BiBookBookmark/>  Backend Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="compleate">
                 <GoProjectSymlink/> Compleate Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="contact">
                <LuContact/>  Contact us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="resume">
                 <AiOutlineProfile/> About us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
