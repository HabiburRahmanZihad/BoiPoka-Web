import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Readbook from '../../components/Readbook/Readbook';
import WishlistBook from '../../components/WishlistBook/WishlistBook';
// import { useLoaderData } from 'react-router';
import { getMarkAsRead } from '../../components/utility/addtoDB';




const ListedBooks = () => {
    // const data = useLoaderData();
    const [displayBooks, setDisplayBooks] = React.useState([]);
    const [sort, setSort] = useState('');

    useEffect(() => {
        const savedbooks = getMarkAsRead();
        setDisplayBooks(savedbooks);
    }, []);

    console.log(displayBooks);

    const handleSort = (type) => {
        // console.log(type);
        setSort(type);
        let sortedBooks = [];
        if (type === 'Pages') {
            sortedBooks = [...displayBooks].sort((a, b) => b.totalPages - a.totalPages);
        }
        if (type === 'Rating') {
            sortedBooks = [...displayBooks].sort((a, b) => b.rating - a.rating);
        }
        else {
            sortedBooks = [...displayBooks];
        }
        setDisplayBooks(sortedBooks);
    }


    return (
        <div>
            <div className='text-center my-10 bg-[rgba(19,19,19,0.05)]rounded-lg py-10'>
                <h1 className='text-5xl font-bold playfair'>
                    BooKs
                </h1>
            </div>


            <div className='md:flex flex-col items-center justify-center mb-5'>
                <details className="dropdown dropdown-end">
                    <summary className="btn m-1 bg-[#23BE0A] text-white p-8 rounded-xl text-xl">Sort By : {sort ? sort : 'Reset'}</summary>

                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">

                        <li><a onClick={() => handleSort('Pages')}>pages</a></li>

                        <li><a onClick={() => handleSort('Rating')}>rating</a></li>


                    </ul>
                </details>
            </div>

            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        <Readbook></Readbook>
                    </TabPanel>
                    <TabPanel>
                        <WishlistBook></WishlistBook>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default ListedBooks;