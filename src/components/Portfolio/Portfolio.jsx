import React from 'react';
import './portfolio.css'
import testimg from '../../images/bath-portfolio.jpg'
import port7 from '../../images/port7.jpg'
import port1 from '../../images/port1.jpg'
import port2 from '../../images/port2.jpg'
import port3 from '../../images/port3.jpg'
import port4 from '../../images/port4.jpg'
import port5 from '../../images/port5.jpg'
import port6 from '../../images/port6.jpg'
const Portfolio = () => {
    return (
        <div id="ourPortfolio" className="portfolio_section">
      <div className="container_port">
        <section>
          <div className="portfolio_title_block2">
            <h2 className="portfolio_title2">OutPortfolio</h2>
          </div>
        </section>
        <div className="row contain">
          <div className="image">
            <img src={port7} alt="testimg" />
            <div className="details">
              <h2>
                Bath <span>Refinishing</span>
              </h2>
              <p>
              Transform your worn-out bathtub into a brand-new one with our efficient and cost-effective bath refinishing service.
              </p>
              <div className="more">
                <a href="#" className="read-more">
                  Read <span>More</span>
                </a>
                <div className="icon-links">
                  <a href="#">
                    <i className="fas fa-heart"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-eye"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-paperclip"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="image">
            <img src={port1} alt="testimg" />
            <div className="details">
              <h2>
                Installation of <span>Mixers</span>
              </h2>
              <p>
              Our expert technicians ensure seamless installation of mixers, providing you with efficient and durable solutions for your daily use.
              </p>
              <div className="more">
                <a href="#" className="read-more">
                  Read <span>More</span>
                </a>
                <div className="icon-links">
                  <a href="#">
                    <i className="fas fa-heart"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-eye"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-paperclip"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="image">
            <img src={port2} alt="testimg" />
            <div className="details">
              <h2>
                Bath <span>Cleaning</span>
              </h2>
              <p>
              Our professional bath cleaning service restores your bathtub to its original shine, leaving it sparkling clean and fresh for your next relaxing soak.
              </p>
              <div className="more">
                <a href="#" className="read-more">
                  Read <span>More</span>
                </a>
                <div className="icon-links">
                  <a href="#">
                    <i className="fas fa-heart"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-eye"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-paperclip"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="image">
            <img src={port3} alt="" />
            <div className="details">
              <h2>
                Finishing with <span>Spray</span>
              </h2>
              <p>
              Our premium bath spray finish provides a durable and long-lasting coating, enhancing the look and feel of your bathtub while protecting it from wear and tear.
              </p>
              <div className="more">
                <a href="#" className="read-more">
                  Read <span>More</span>
                </a>
                <div className="icon-links">
                  <a href="#">
                    <i className="fas fa-heart"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-eye"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-paperclip"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="image">
            <img src={port4} alt="" />
            <div className="details">
              <h2>
                Installing a <span>New Bath</span>
              </h2>
              <p>
              Our skilled technicians offer hassle-free installation of a new bath, providing you with a refreshing and comfortable space for your daily relaxation.
              </p>
              <div className="more">
                <a href="#" className="read-more">
                  Read <span>More</span>
                </a>
                <div className="icon-links">
                  <a href="#">
                    <i className="fas fa-heart"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-eye"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-paperclip"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="image">
            <img src={port5} alt="" />
            <div className="details">
              <h2>
                Mediun Bathroom <span>Renovation</span>
              </h2>
              <p>
              Our modern bathroom renovation service elevates your bathroom with sleek designs, high-quality materials, and efficient fixtures, creating a luxurious and functional space.
              </p>
              <div className="more">
                <a href="#" className="read-more">
                  Read <span>More</span>
                </a>
                <div className="icon-links">
                  <a href="#">
                    <i className="fas fa-heart"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-eye"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-paperclip"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Portfolio;