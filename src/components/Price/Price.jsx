import React from "react";
import "./price.css";
const Price = () => {
  return (
    <div>
      <section className="price_section">
        <div className="container">
          <div className="price_top_block">
            <div className="price_title_block">
              <span className="price_title2">Price &amp; Plans</span>
              <h2 className="price_subTitle">Choose Your Perfect Plans</h2>
            </div>
          </div>
          <div className="row price_cards">
            <div className="col-md-6 col-lg-3 ftco-animate price_gap">
              <div className="price_card">
                <div className="text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa flaticon-sprayer"></span>
                  </div>
                  <h4 className="heading-2">Starter</h4>
                  <span className="price">
                    <sup>$</sup> <span className="number">49</span>
                  </span>
                  <ul className="pricing-text mb-5">
                    <li>
                      <span className="fa fa-check mr-2"></span>repair damage
                    </li>
                    <li>
                      <span className="fa fa-check mr-2"></span>defects on the surface of the bath
                    </li>
                    <li>
                      <span className="fa fa-check mr-2"></span>Bathroom
                      cleaning
                    </li>
                    <li>
                      <span className="fa fa-check mr-2"></span>epoxy resin

                    </li>
                    <li>
                      <span className="fa fa-check mr-2"></span>acrylic gel coat.
                    </li>
                  </ul>

                  <p href="#" className="btn price_btn px-4 py-3">
                    Get Started
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate price_gap">
              <div className="price_card">
                <div className="text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa flaticon-vacuum-cleaner"></span>
                  </div>
                  <h4 className="heading-2">Standard</h4>
                  <span className="price">
                    <sup>$</sup> <span className="number">79</span>
                  </span>

                  <ul className="pricing-text mb-5">
                    <li>
                      <span className="fa fa-check mr-2"></span>handles for easy entry and exit
                    </li>
                    <li>
                      <span className="fa fa-check mr-2"></span>anti-slip coatings
                    </li>
                    <li>
                      <span className="fa fa-check mr-2"></span>head restraints
                    </li>
                    <li>
                      <span className="fa fa-check mr-2"></span>Consultation
                    </li>
                    <li>
                      <span className="fa fa-check mr-2"></span>
bathroom care advice
                    </li>
                  </ul>

                  <p href="#" className="btn price_btn px-4 py-3">
                    Get Started
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate price_gap">
              <div className="price_card">
                <div className="text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa flaticon-tap"></span>
                  </div>
                  <h4 className="heading-2">Premium</h4>
                  <span className="price">
                    <sup>$</sup> <span className="number">109</span>
                  </span>

                  <ul className="pricing-text mb-5">
                    <li>
                      <span className="fa fa-check mr-2"></span>repire surfaces
                    </li>
                    <li>
                      <span className="fa fa-check mr-2"></span>shells
                    </li>
                    <li>
                      <span className="fa fa-check mr-2"></span>
shower cabins
                    </li>
                    <li>
                      <span className="fa fa-check mr-2"></span>repire tile
                    </li>
                    <li>
                      <span className="fa fa-check mr-2"></span>Livingroom
                      cleaning
                    </li>
                  </ul>

                  <p href="#" className="btn price_btn px-4 py-3">
                    Get Started
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate price_gap">
              <div className="price_card price_standart">
                <div className="text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa flaticon-cleaning"></span>
                  </div>
                  <h4 className="heading-2">Platinum</h4>
                  <span className="price">
                    <sup>$</sup> <span className="number">159</span>
                  </span>

                  <ul className="pricing-text mb-5">
                    <li>
                      <span className="fa fa-check mr-2"></span>Bedrooms
                      cleaning
                    </li>
                    <li>
                      <span className="fa fa-check mr-2"></span>Vacuuming
                    </li>
                    <li>
                      <span className="fa fa-check mr-2"></span>Bathroom
                      cleaning
                    </li>
                    <li>
                      <span className="fa fa-check mr-2"></span>Mirrow cleaning
                    </li>
                    <li>
                      <span className="fa fa-check mr-2"></span>Livingroom
                      cleaning
                    </li>
                  </ul>

                  <p href="#" className="btn price_btn px-4 py-3">
                    Get Started
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Price;
