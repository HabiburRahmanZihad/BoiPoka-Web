import React from 'react';
import Books from '../Books/Books';
import HeroBanner from '../../components/header/HeroBanner';
import { useLoaderData } from 'react-router';

const Home = () => {
    const books = useLoaderData();

    return (
        <div>
            <HeroBanner></HeroBanner>
            <Books books={books}></Books>
        </div>
    );
};

export default Home;