// import { Link } from 'react-router-dom';
// import restaurantFoodImage from './assets/restaurant-food.jpg';
import "./Hero.css";
// import logo from "../assets/hero-img1.jpg";
import Banner from "../assets/banner.png";

const Hero = () => {
  return (
    <section className="hero">
      <div>
        <img className="hero-image" src={Banner} alt="Restaurant food" />
        <div className="hero-information container">
          <h1 className="hero-head">Asiyan</h1>
          <h2 className="hero-head">Book of records</h2>
          <p className="hero-para">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit consequatur atque maiores tempore iusto aliquam quia
            placeat ea doloremque? Voluptatibus aperiam repellat voluptates esse
            blanditiis aliquid quo, odio dolorum minima.Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Reprehenderit consequatur atque
            maiores tempore iusto aliquam quia placeat ea doloremque?
            Voluptatibus aperiam repellat voluptates esse blanditiis aliquid
            quo, odio dolorum minima.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
