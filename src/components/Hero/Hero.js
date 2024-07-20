// import { Link } from 'react-router-dom';
// import restaurantFoodImage from './assets/restaurant-food.jpg';
import "./Hero.css";
import logo from "../assets/hero-img1.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1 className="hero-head">Asiyan</h1>
          <h2 className="hero-head">Book of records</h2>
          <p>
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
        <img className="hero-image" src={logo} alt="Restaurant food" />
      </div>
    </section>
  );
};

export default Hero;
