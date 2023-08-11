"use client";

import {
  Hero,
  RecommendationSection,
  TopDeals,
  TopDestinations,
} from '../components';
import React from 'react';

const Home = () => {
  return (
    <>
      <Hero />
      <RecommendationSection />
      <TopDeals />
      <TopDestinations />
    </>
  );
};

export default Home;
