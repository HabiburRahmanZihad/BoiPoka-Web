import React, { useEffect } from 'react';
import { getMarkAsRead } from '../utility/addtoDB';
import Book from '../Book/Book';
// import { useLoaderData } from 'react-router';

const Readbook = () => {
    const [displayBooks, setDisplayBooks] = React.useState([]);

    // const books = useLoaderData(); // Fetching the books data from the loader
    // console.log(books);

    useEffect(() => {
        const savedbooks = getMarkAsRead(); // Fetching the saved books from local storage

        setDisplayBooks(savedbooks); // Setting the saved books to the state
    }, []);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    displayBooks.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Readbook;