import React from "react";
import "./info.css";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { RiTwitterLine } from "react-icons/ri";
const Info = () => {
  
   
  return (
    <>
      <div className="row">
        <div className="col-md-12  main_info">
          <div className="container">
            <p className="main_text">
              <span className="info_text">
                <strong>Call us today?</strong>
              </span>
              <span className="info_text">
                <a href="#">
                  <BsTelephone />
                </a>
                <a href="#" className="info_number">+42 (0) 1234 543 345,</a>
              </span>
              <span className="info_text">
                <a href="#" className="info_number">+44 (0) 1234 543 345</a>
              </span>
              <span className="info_text">
                <a href="#">
                  {" "}
                  <HiOutlineMail />
                </a>
                <a href="#" className="info_number"> info@kenyaexports.co.uk</a>
              </span>
              <span className="header_icon">
                <a href="https://www.facebook.com/">
                  {" "}
                  <FiFacebook />
                </a>
                <a href="https://www.linkedin.com/">
                  <AiOutlineLinkedin />
                </a>
                <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
                  {" "}
                  <RiTwitterLine />
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Info;
