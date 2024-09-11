import React from 'react';
import '../src/App.css';

import Header from './components/Header/Header';
import HeroSection from './components/Hero/HeroSection';
import PropertyList from './components/property/PropertyList';

import RealEstateSection from './components/RealEstateSection/RealEstateSection';
import Services from './components/Services/Services';

import TeamSection from './components/team/TeamSection';
import Blog from './components/Bloging/Blog';
import Testimonials from './components/Testimonials/Test';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
       <HeroSection />
      <RealEstateSection/>
<PropertyList /> 
<Services/>
<TeamSection/>
<Blog/>
<Testimonials/>
<Footer/> 

    </div>
  );
}

export default App;