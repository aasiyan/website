// import { Link } from 'react-router-dom';
// import restaurantFoodImage from './assets/restaurant-food.jpg';
import "./Hero.css";
// import logo from "../assets/hero-img1.jpg";
import Banner from "../assets/banner.png";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div>
        <img className="hero-image" src={Banner} alt="Restaurant food" />
        <div className="hero-information container">
          <h1 className="hero-head">Asiyan</h1>
          <h2 className="hero-head">Book of records</h2>
          <p className="hero-para">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The <b>Asiyan Book of Records</b> is
            a platform that recognizes and celebrates extraordinary
            achievements, talents, and milestones across a wide range of fields.
            Similar to other record-keeping organizations, it documents
            individuals or groups who accomplish feats of excellence, set new
            standards, or break previous records in various categories such as
            sports, education, arts, science, and more.
          </p>

          <p className="hero-para">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This website likely provides detailed
            guidelines on how participants can submit their record attempts, the
            process for validation, and the criteria required for recognition.
            It serves as an inspiration for people striving for excellence and
            offers a space for both well-known and lesser-known talents to gain
            global acknowledgment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
