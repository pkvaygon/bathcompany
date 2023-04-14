import React, { useState } from "react";
import "./home.css";
import whatsapp from '../../images/whatsapp.png'
import telegram from '../../images/telegram.png'
import gmail from '../../images/gmail.png'
import facebook from '../../images/facebook.png'
const Home = () => {
  return (
    <section className="home_back" id="home">
      <div className="home_container">
        <div className="home_wrapper">
          <div className="home_title">
            <h2>
            Welcome to our bath tub refinishing services, where we specialize in transforming your bathroom into a beautiful and luxurious space. Our team of experts are dedicated to providing high-quality, affordable and long-lasting refinishing solutions for your bath tub.
            </h2>
          </div>
          <div className="home_form">
            <div className="home_link">
            <a href="https://wa.me/13128489008" title="whatsapp icons">
              <img src={whatsapp} alt="" />
            </a>
            </div>
            <div className="home_link">
            <a href="https://t.me/Almazkhan_N" title="telegram icons">
              <img src={telegram} alt="" />
            </a>
            </div>
            <div className="home_link">
            <a href="https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser" title="gmail icons">
              <img src={gmail} alt="" />
            </a>
            </div>
            <div className="home_link"> 
            <a href="https://www.facebook.com/diamondkztubrefinishing" title="facebook icons">
              <img src={facebook} alt="" />
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
