import { Form, redirect } from "react-router-dom";
import TransitionEffect from "../Transition/TransitionEffect";
import { useState } from "react";
import "./contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const handleReset = () => {
    if (name !== "" && isValidEmail(email) && message !== "") {
      setTimeout(() => {
        setName("");
        setEmail("");
        setMessage("");
      }, 3000);
      alert("Successfully submitted!!!");
    }
  };
  return (
    <section className="contact-container">
      <h1>Contact Us</h1>
      <TransitionEffect />
      <Form method="post" action="/contact" className="form">
        <label className="input-box">
          <span>Full Name</span>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
          />
        </label>
        <label className="input-box">
          <span>Email</span>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </label>
        <label className="input-box">
          <span>Message</span>
          <textarea
            name="message"
            rows={7}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
          ></textarea>
        </label>
        <button className="Submit-btn" onClick={handleReset}>
          Submit
        </button>
      </Form>
    </section>
  );
}

export default Contact;

export const contactAction = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    name: data.get("name"),
    email: data.get("email"),
    message: data.get("message"),
  };

  console.log(submission);

  return redirect("/contact");
};
