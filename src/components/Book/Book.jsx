import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { NavLink } from 'react-router';

const Book = ({ book }) => {
    // console.log(book);
    const { bookId, bookName, author, image, rating, tags, publisher } = book;
    // console.log(tags);

    return (
        <NavLink to={`/bookDetails/${bookId}`} >

            <div className="card bg-base-100  shadow-sm hover:shadow-lg transition duration-300 ease-in-out p-6 rounded-3xl space-y-4">
                <div className='rounded-2xl overflow-hidden bg-gray-100'>
                    <img className='h-[200px] max-w-full mx-auto  rounded-lg p-5'
                        src={image}
                        alt="Shoes" />
                </div>

                <div className="space-x-2">
                    {
                        tags.map(tag => <div className=" btn text-[#23BE0A] border-none text-xl" key={tag}>{tag}</div>)
                    }
                </div>

                <div className=" border-b-stone-200 border-dashed border-b-2 space-y-2 pb-6 p-2 lg:p-0">
                    <h2 className="playfair text-2xl font-bold text-[#1F2937] mt-4 overflow-hidden  text-ellipsis whitespace-nowrap">
                        {bookName}
                    </h2>
                    <p className='textarea-md font-medium'>{author}</p>
                </div>

                <div className="card-actions justify-between items-center mt-4">
                    <p >{publisher}</p>
                    <div className="flex items-center gap-2">
                        <p className=" font-bold">{rating}</p>
                        <FaRegStar size={15} />
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default Book;