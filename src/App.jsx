import React from 'react';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import Review from './components/Review/Review';

const App = () => {
  return (
    <div>
      <Header />
      <Home/>
      <AboutUs />
      <Portfolio />
      <Review/>
      <Footer/>
    </div>
  );
};

export default App;