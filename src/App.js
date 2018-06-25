import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Stats from './components/Stats';
import Slider from './components/Slider';
import Featured from './components/Featured';
import FundRaisingIdea from './components/FundRaisingIdea';
import HowItWorks from './components/HowItWorks';
import Partners from './components/Partners';
import ForYourOrganization from './components/ForYourOrganization';
import Footer from './components/Footer';
import CopyRight from './components/CopyRight';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slider />
        <Stats />
        <Featured />
        <div className="featured-absolute-positioning">
          <div className="featured-absolute-positioning-inner">
        <FundRaisingIdea />
          </div>
        </div>
        <HowItWorks />
        <Partners />
        <ForYourOrganization />
        <Footer />
        {/* <CopyRight /> */}
      </div>
    );
  }
}

export default App;
