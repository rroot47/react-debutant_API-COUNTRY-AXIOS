import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Pays from '../components/Pays';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Logo />
      <Pays />
    </div>
  );
};

export default Home;