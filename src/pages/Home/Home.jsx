import React from 'react';
import Books from '../Books/Books';
import HeroBanner from '../../components/header/HeroBanner';
import { useLoaderData } from 'react-router';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const books = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>Boipoka Book Vibe 📚</title>
                <meta name="description" content="Book Store" />
                <link rel="canonical" href="/" />
            </Helmet>

                <HeroBanner></HeroBanner>
                <Books books={books}></Books>
        </div>
    );
};

export default Home;