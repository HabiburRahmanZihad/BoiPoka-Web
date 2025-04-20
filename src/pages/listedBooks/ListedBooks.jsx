import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WishlistBook from '../../components/WishlistBook/WishlistBook';
import { getMarkAsRead } from '../../components/utility/addtoDB';
import Book from '../../components/Book/Book';



const ListedBooks = () => {
    const [displayBooks, setDisplayBooks] = React.useState([]);
    const [sort, setSort] = useState('');

    useEffect(() => {
        const savedbooks = getMarkAsRead();
        setDisplayBooks(savedbooks);
    }, []);


    const handleSort = (type) => {
        setSort(type);

        let sortedBooks = [];
        if (type === 'Reset') {
            sortedBooks = displayBooks;
        }
        else if (type === 'pages') {
            sortedBooks = [...displayBooks].sort((a, b) => a.totalPages - b.totalPages);
        }
        else if (type === 'rating') {
            sortedBooks = [...displayBooks].sort((a, b) => b.rating - a.rating);
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

                        <li><a onClick={() => handleSort('pages')}>pages</a></li>

                        <li><a onClick={() => handleSort('rating')}>rating</a></li>


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
                        {/* <Readbook></Readbook> */}
                        <p>hello</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {
                                displayBooks.map(book => <Book book={book} key={book.bookId}></Book>)
                            }
                        </div>
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