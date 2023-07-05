import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { BiLogoCodepen, BiPhone } from "react-icons/bi";
import { GoMail } from "react-icons/go";
function Profile() {
  return (
    <>
      <div className="container">
        <div className="header">
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
          <a href="#" className="button-4" style={{width:"100%"}}>
          Resume
          </a>
        </div>
        </div>
        <div className="contact">
          <p>
            <IoLocationOutline /> Noida sector-62
          </p>
          <p>
            <a href="#">
              <BiPhone /> number
            </a>
          </p>
          <p>
            <a href="#">
              <GoMail /> Email
            </a>
          </p>
          <p>
            <a href="#">
              <RxLinkedinLogo /> Linkedin
            </a>
          </p>
          <p>
            <a href="#">
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
