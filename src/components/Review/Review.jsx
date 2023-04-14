import React from "react";
import "./review.css";
import rev from "../../images/BathLogo.png";
const Review = () => {
  return (
    <div className="container">
      <div className="review_section">
        <div className="box">
          <i className="fas fa-quote-left quote"></i>
          <p>
          Highly impressed with the bath refinishing service provided by this company. The team was professional, efficient, and transformed our old bathtub into a brand-new one in just a few hours. The quality of work exceeded our expectations, and we are thrilled with the final result. Would definitely recommend this company to anyone looking for a cost-effective solution to upgrade their bathroom.
          </p>
          <div className="content">
            <div className="info">
              <div className="name">Alex Smith</div>
              <div className="job">Designer | Developer</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
            <div className="image">
              <img src={rev} alt="" />
            </div>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-quote-left quote"></i>
          <p>
          I recently used this bath refinishing company and I couldn't be happier with the results. The team was punctual, professional, and worked efficiently. My bathtub looks amazing and the finish is holding up really well. The price was very reasonable and I would highly recommend this company to anyone looking to upgrade their bathroom without breaking the bank.
          </p>
          <div className="content">
            <div className="info">
              <div className="name">Steven Chris</div>
              <div className="job">YouTuber | Blogger</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
            <div className="image">
              <img src={rev} alt="" />
            </div>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-quote-left  quote"></i>
          <p>
          I had a great experience with this bath refinishing company. The team was friendly, knowledgeable, and did an excellent job with refinishing my bathtub. The process was quick and easy, and the results exceeded my expectations. My bathtub looks brand new and I'm so happy with the outcome. I would definitely recommend this company to anyone looking for a high-quality, affordable bath refinishing service.
          </p>
          <div className="content">
            <div className="info">
              <div className="name">Kristina Bellis</div>
              <div className="job">Freelancer | Advertiser</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
            <div className="image">
              <img src={rev} alt="" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Review;
