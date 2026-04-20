import React from 'react';
import StickyNavbar from '../components/StickyNavbar'; // <-- Import it here
import TopBanner from '../components/TopBanner';
import Stats from '../components/Stats';
import TrustedCompanies from '../components/TrustedCompanies'; // <-- Import the new component
import Features from '../components/Features';
import Tabs from '../components/CourseTabs/Tabs';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import '../Subscribe.css';


function  Subscribe() {
  return (
    <div className="udemy-app-container">
    
      <StickyNavbar /> {/* <-- Drop it here */}
      
      <main>
        <TopBanner/>
        <Stats />     
        <TrustedCompanies /> {/* <-- Add it right here */}
        <Features />  
        <Tabs />
        <Pricing />
        <FAQ />
      </main>
    </div>
  );
}

export default Subscribe;