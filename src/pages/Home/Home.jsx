import React from 'react';
import Books from '../Books/Books';
import HeroBanner from '../../components/header/HeroBanner';

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <Books></Books>
        </div>
    );
};

export default Home;