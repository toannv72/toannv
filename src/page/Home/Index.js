import React from 'react'
import Hero from './Hero';
import About from './About';
import Explore from './Explore';
import GetStarted from './GetStarted';
import WhatsNew from './WhatsNew';
import World from './World';
import Insights from './Insights';
import Feedback from './Feedback';
import { Footer, Navbar } from '../components';

export default function Index() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  )
}
