import React from 'react'
import {  RxGithubLogo,RxLinkedinLogo } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { BiLogoCodepen } from "react-icons/bi";
import { LuContact } from "react-icons/lu";

function Footer() {
  return (
    <>
     <footer>
     <div className="container footer">
        <div className="icon">
            <a href="#"><RxGithubLogo/> sachinmaurya96</a>
        </div>
        <div className="items">
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
          <p>
            <a href="#">
              <CgProfile /> About us
            </a>
          </p>
          <p>
            <a href="#">
              <LuContact /> Contact us
            </a>
          </p>
        </div>
      </div>
     </footer>
    </>
  )
}

export default Footer
