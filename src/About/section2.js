import React from "react";
import "./About.css";
import S1 from"../Images/pc.png";
import S2 from"../Images/appointment.png";
import S3 from"../Images/next-week.png";
import S4 from"../Images/increase.png";
const Section2 = () => {
  return (
    <>
      <div className="col-md-12 section2_main">
        <div className="container d-flex">
          <div className="col-md-3 section2_card">
            <img alt="img" src={S1} />
            
            <div>
                <br/>
              <p className="section2_card_head">COMPUTER</p>
              <p className="section2_card_number">273</p>
              <p className="section2_card_text">
                Number of computers we have sent to Kenya in the past month.
              </p>
            </div>
          </div>
          <div className="col-md-3 section2_card">
            <img alt="img" src={S2} />
            
            <div>
                <br/>
              <p className="section2_card_head">DAYS</p>
              <p className="section2_card_number">5</p>
              <p className="section2_card_text">
              By Air, cargo takes 5 days dispatch is EVERY FRIDAY
              </p>
            </div>
          </div>
          <div className="col-md-3 section2_card">
            <img alt="img" src={S3} />
            
            <div>
                <br/>
              <p className="section2_card_head">WEEKS</p>
              <p className="section2_card_number">6</p>
              <p className="section2_card_text">
              By Sea the cargo takes 6 weeks from the departure date to delivery
              </p>
            </div>
          </div>
          <div className="col-md-3 section2_card">
            <img alt="img" src={S4} />
            
            <div>
                <br/>
              <p className="section2_card_head">YEARS OF EXP.</p>
              <p className="section2_card_number">7</p>
              <p className="section2_card_text">
              We have been keeping customers happy since 2009.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Section2;
