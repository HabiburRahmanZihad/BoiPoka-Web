import React, { useEffect } from 'react';
import Book from '../../components/Book/Book';

const Books = ({ books }) => {
    const [displayBooks, setDisplayBooks] = React.useState([]); // State to hold the books to be displayed
    const [showall, setShowAll] = React.useState(false); // State to toggle between showing all books and a limited number of books

    useEffect(() => {
        if (showall) {
            setDisplayBooks(books);
        } else {
            const initialBooks = books.slice(0, 3);
            setDisplayBooks(initialBooks);
        }
        // setDisplayBooks(books);
    }, [books, showall]);

    return (
        <>
            <div>
                <h1 className='text-center playfair text-5xl font-bold mb-10'>Books</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        displayBooks.map(book => <Book book={book} key={book.bookId}></Book>)
                    }
                </div>
                <button
                    // onClick={() => setShowAll(!showall)}
                    onClick={() => {
                        setShowAll(prev => !prev);
                        // if(showall) window.scrollTo(0, 10);
                        showall ? window.scrollTo(0, 10) : window.scrollTo(0, 1000);
                    }}
                    className="btn bg-[#23BE0A] text-white p-8 rounded-xl text-xl mt-6">{showall ? 'Show less' : 'Show More'}</button>
            </div>
        </>
    );
};

export default Books;