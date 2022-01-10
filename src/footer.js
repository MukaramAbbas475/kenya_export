import React from 'react'
import"./Home.css";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import Navimg from "./Images/logo.png";
const Footer=()=>{
    return(
        <>
        
        <div className="section8 d-flex">
          <div className="d-flex section8_sub">
            <img
              className="nav_img section8_img"
              src={Navimg}
              alt="NavBar Image"
            />

            <div className="section8_nav">
              <ul>
                <li className="section8_li">
                  <a>Home</a>
                </li>
                <li className="section8_li">
                  <a>About</a>
                </li>
                <li className="section8_li">
                  <a>Services</a>
                </li>
                <li className="section8_li">
                  <a>Marketplace</a>
                </li>
                <li className="section8_li">
                  <a>Testimonials</a>
                </li>
                <li className="section8_li">
                  <a>FAQs</a>
                </li>
                <li className="section8_li">
                  <a>Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="section8_icon">
            <a href="#">
              {" "}
              <RiFacebookCircleLine />
              Facebook
            </a>
            <br />
            <a href="#">
              {" "}
              <FaLinkedin />
              Linkedin
            </a>
            <br />
            <a href="#">
              <AiOutlineYoutube />
              Youtube
            </a>
          </div>
          <div className="section8_phone">
            <p>
              Call us today?
              <br />
              +44 (0) 1582 561 029
              <br />
              +44 (0) 7949 531 238
              <br />
              info@kenyaexports.co.uk
            </p>
          </div>
        </div>
        <div className="section9">
          <p className="section9_text1">
            All Rights Reserved, © 2021{" "}
            <span className="section9_text2">Kenya Exports </span>| Powered by{" "}
            <span className="section9_text2">Mobitsolutions</span>
          </p>
        </div>
        </>)
}
export default Footer;