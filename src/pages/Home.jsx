import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Stack from '../components/sections/Stack';
import Work from '../components/sections/Work';
import FeaturedWorks from '../components/sections/FeaturedWorks';
import EducationSection from '../components/sections/EducationSection';
import Contact from '../components/sections/Contact';

/* Single-scroll home. Each section owns its own anchor id so the pill nav,
   the footer links, and the legacy /about-style routes all land in one place. */

const Home = () => (
  <>
    <Hero />
    <About />
    <Stack />
    <Work />
    <FeaturedWorks />
    <EducationSection />
    <Contact />
  </>
);

export default Home;
