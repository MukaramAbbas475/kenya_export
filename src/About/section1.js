import React from "react";
import "./About.css";
import C1 from"../Images/A1.png";
import C2 from"../Images/A2.png";
import C3 from"../Images/A3.png";
const Section1 = () => {
  return (
    <>
      <div className="container">
        <div className="col-md-12 section1_main d-flex">
          <div className="col-md-6 ">
            <p className="section1_text1">MODERN & TRUSTED LOGISTICS COMPANY</p>

            <p className="section1_text_a">
              Our commitment is to maintain the highest possible standards
              <br /> of services in every aspect of our business.{" "}
            </p>
          </div>
          <div className="col-md-6">
            <ul>
              <li className="section_1_text_b">Great Customer Support.</li>
              <li className="section_1_text_b">Fast and Safe Delivery.</li>
              <li className="section_1_text_b">
                Best prices for Air and Sea Cargo.
              </li>
              <li className="section_1_text_b">7 years in Operation.</li>
              <li className="section_1_text_b">We Collect Nationwide.</li>
            </ul>
          </div>
        </div>
        <div className="col-md-12 d-flex">
          <div className="col-md-4">
            <img alt="img" src={C1}  className=" section1_card_img"/>
            <p className="section1_card_head">What We Do</p>
            
            <p>
              We provide a fast delivery of your goods by sea and air from your
              home in UK to your door step in Kenya. Everyday hundreds of local
              and international individuals and businesses use Kenya Exports to
              send shipments and cargo conveniently, quickly, and securely.
            </p>
          </div>
          <div className="col-md-4">
            <img alt="img" src={C2} className=" section1_card_img"/>
            <p className="section1_card_head">Our Mission</p>
            
            <p>
              To provide a reliable, efficient and cost effective services to
              meet the needs of customer. Our commitment is to maintain the
              highest possible standards of services in every aspect of our
              business. We are always actively seeking ways to improve still
              further the services that we offer.
            </p>
          </div>
          <div className="col-md-4">
            <img alt="img" src={C3} className=" section1_card_img"/>
            <p className="section1_card_head">  <svg
                stroke="currentColor"
                fill="none"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 18H17V16H7V18Z" fill="currentColor"></path>
                <path d="M17 14H7V12H17V14Z" fill="currentColor"></path>
                <path d="M7 10H11V8H7V10Z" fill="currentColor"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z"
                  fill="currentColor"
                ></path>
              </svg>Our Policy</p>
            
            <p>
             
              Our staff members are experienced in all aspects of shipping
              household goods and personal effects overseas. From the time your
              goods are collected to final delivery they will talk you through
              the international moving process from UK to Kenya. We will provide
              guidance and advice whenever required to ensure you are informed
              and relaxed every step of the way.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Section1;
