import "./about.css";
import car from "../../img/about-img.png";
import TransitionEffect from "../Transition/TransitionEffect";

function About() {
  return (
    <section className="about-container">
      <TransitionEffect />
      <div className="car-img-box">
        <img src={car} alt="car" />
        <span></span>
      </div>
      <div className="content-box">
        <h3>About Us</h3>
        <h2>Best Travel Experience</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          voluptates laboriosam excepturi. Numquam unde dignissimos deleniti
          perspiciatis minus, sunt optio facere. Aut hic dolorum possimus
          cupiditate dolores rem optio ipsa.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsa
          numquam ipsum ab dolorem hic voluptas officia blanditiis, modi
          delectus, a iure, facere recusandae nulla cum voluptatibus neque
          maiores velit?
        </p>
      </div>
    </section>
  );
}

export default About;
