import React from 'react';
import Book from '../../components/Book/Book';

const Books = ({ books }) => {

    return (
        <>
            <div>
                <h1 className='text-center playfair text-5xl font-bold mb-10'>Books</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        books.map(book => <Book book={book} key={book.bookId}></Book>)
                    }
                </div>
            </div>
        </>
    );
};

export default Books;