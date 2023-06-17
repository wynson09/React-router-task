import "./home.css";
import car from "../../img/home-img.png";
import TransitionEffect from "../Transition/TransitionEffect";

function Home() {
  return (
    <section className="home-container">
      <TransitionEffect />
      <div className="content-box">
        <h1>Premium Car Rental in Town</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          voluptates laboriosam excepturi. Numquam unde dignissimos deleniti
          perspiciatis minus, sunt optio facere. Aut hic dolorum possimus
          cupiditate dolores rem optio ipsa.
        </p>
      </div>
      <div className="car-img-container">
        <img src={car} alt="car" />
      </div>
    </section>
  );
}

export default Home;
