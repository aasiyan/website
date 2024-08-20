import React from "react";
import "./About.css";
import Dummy from "../assets/dummy.jpg";
const About = () => {
  return (
    <>
      <div>
        <h1 className="auth-note about-us" style={{ marginTop: "80px" }}>
          About Us
        </h1>
        <div className="container">
          <div className="row about-div">
            <div className="col-lg-6">
              <p className="about-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati ipsum, aperiam nobis, expedita tempore voluptatem est
                soluta harum aliquid blanditiis minus ea esse dolorum eaque
                excepturi id quo et perspiciatis.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Obcaecati ipsum, aperiam nobis,
                expedita tempore voluptatem est soluta harum aliquid blanditiis
                minus ea esse dolorum eaque excepturi id quo et
                perspiciatis.Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Obcaecati ipsum, aperiam nobis, expedita tempore
                voluptatem est soluta harum aliquid blanditiis minus ea esse
                blanditiis minus ea esse
              </p>
            </div>
            <div className="col-lg-6">
              <img src={Dummy} alt="dum" className="about-img" />
              <h3 className="about-head">Founder</h3>
              <p className="about-name">Dr P.Vivek</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
