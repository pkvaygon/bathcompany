import React from "react";
import "./aboutUs.css";
import port from "../../images/home_background.webp"
import car1 from '../../images/car_img1.jpg'
import car2 from '../../images/car_img2.jpg'
import car3 from '../../images/car_img.jpg'
import car4 from '../../images/car_img4.jpg'
import { Carousel } from "antd";

const AboutUs = () => {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div className="about-us-section" id="aboutUs">
      <section className="about-us">
        <div className="container">
          <div className="aboutUs-wrapper">
            <div className="aboutUs_title">
              <h2>About Us</h2>
            </div>
            <div className="aboutUs-content">
              <div className="aboutUs-text">
                <p>
                  At Chicago Bath Refinishing, we specialize in transforming
                  your old, worn-out bathtub into a beautiful, like-new surface.
                  Our team of experienced professionals has been serving the
                  Chicago area for over 10 years, and we're committed to
                  providing the highest quality workmanship and customer
                  service.
                </p>

                <p>
                  We use only the best materials and techniques to refinish your
                  bathtub, ensuring a durable and long-lasting finish. Our
                  refinishing process is quick and affordable, so you can enjoy
                  a brand new-looking bathtub without the hassle and expense of
                  a full replacement.
                </p>
                <p>
                  We're dedicated to exceeding your expectations and making your
                  bathroom look and feel like new. Contact us today to schedule
                  a free consultation and see how we can transform your bathtub.
                </p>
                <p>
                  We are a locally owned and operated bath refinishing company
                  in Chicago, dedicated to providing high-quality and affordable
                  services to homeowners and businesses throughout the area.
                  With years of experience in the industry, we have built a
                  reputation for our exceptional craftsmanship and attention to
                  detail.
                </p>
                <p>
                  Our team of skilled professionals is committed to exceeding
                  our customers' expectations and ensuring that every project is
                  completed on time and to their satisfaction. We use only the
                  highest quality materials and equipment to ensure that our
                  work stands the test of time.
                </p>
              </div>
              <div className="aboutUs-img">
                <Carousel autoplay>
                  <div>
                    <img className="d-block w-100 carousel-img" src={car1} alt="1" />
                  </div>
                  <div>
                  <img className="d-block w-100 carousel-img" src={car2} alt="2" />
                  </div>
                  <div>
                  <img className="d-block w-100 carousel-img" src={car3} alt="3" />
                  </div>
                  <div>
                  <img className="d-block w-100 carousel-img" src={car4} alt="4" />
                  </div>
                </Carousel>
               
              </div>
            </div>
          </div>
          <div className="aboutUs-cards"></div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
