import React, { useState } from "react";
import "./home.css";
import axios from "axios";
import qs from "qs";
// import nodemailer from 'nodemailer';
import whatsapp from '../../images/whatsapp.png'
import telegram from '../../images/telegram.png'
import gmail from '../../images/gmail.png'
import facebook from '../../images/facebook.png'
const Home = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !contact ||!email) {
      alert("Please fill out all fields");
      return;
    }
    // const messageToSend = `${name} with email ${email} and phone number ${contact}`;
    // const oauth2Client = new google.auth.OAuth2(
    //   "427783663415-mrpp03ld8nnh66vi2is4cbl293qhsd4s.apps.googleusercontent.com",
    //   "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"
    // );
    // oauth2Client.setCredentials({
    //   refresh_token: process.env.REFRESH_TOKEN,
    // });
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     type: 'OAuth2',
    //     user: "almazkhanurkhan@gmail.com",
    //     clientId: process.env.CLIENT_ID,
    //     clientSecret: process.env.CLIENT_SECRET,
    //     accessToken: await oauth2Client.getAccessToken(),
    //   },
    // });
    // const mailOptions = {
    //   from: email,
    //   to: "almazkhannurkhan@gmail.com",
    //   subject: 'New form submission',
    //   text: messageToSend,
    // };
    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log(`Email sent: ${info.response}`);
    //   }
    // });
    try {
      const data = qs.stringify({
        token: "m7rl0v3jj5o1d0n2",
        to: "+13128489008",
        body: `Name:  ${name}\n Contact:  ${contact} \n Email: ${email}`,
      });
      const config = {
        method: "post",
        url: "https://api.ultramsg.com/instance42864/messages/chat",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data,
      };
      const response = await axios(config);
      console.log(response.data);
      console.log(name, contact);
      alert("Message sent successfully");
      setName("");
      setContact("");
      setEmail("")
    } catch (err) {
      console.error(err);
      alert("Message failed to send");
    }
  };
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
