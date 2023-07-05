import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { BiLogoCodepen, BiPhone } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import { NavLink } from "react-router-dom";
function Profile() {
  return (
    <>
      <div className="container">
        <div className="head">
        <div className="image">
          <img src="../images/hero.jpg" alt="" />
        </div>
        <div className="details">
          <div className="name">
            <h2>Sachin Maurya</h2>
          </div>
          <div className="description">
            My name is Sachin Maurya . I am a full-stack Web developer. <br />
            <b>Skills : </b> HTML ,CSS , Javascript, Bootstrap , React, redux, Node , Express , Mongodb, Github
          </div>
          <NavLink to="resume" className="button-4" style={{width:"100%"}}>
          Resume
          </NavLink>
        </div>
        </div>
        <div className="contact__us">
          <p>
            <IoLocationOutline /> Noida sector-62
          </p>
          <p>
            <a href="tel:+919695439912">
              <BiPhone /> +919695439912
            </a>
          </p>
          <p>
            <a href="mailto:nitinmaurya969543@gmail.com">
              <GoMail /> nitinmaurya969543@gmail.com
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/sachin-maurya-826111267/">
              <RxLinkedinLogo /> Linkedin
            </a>
          </p>
          <p>
            <a href="https://github.com/sachinmaurya96">
              <RxGithubLogo /> Github
            </a>
          </p>
          <p>
            <a href="#">
              <BiLogoCodepen /> Codepen
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Profile;
