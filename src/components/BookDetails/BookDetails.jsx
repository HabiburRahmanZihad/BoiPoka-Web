import React from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router';
// import { useNavigate } from 'react-router';
import { addFavorite, addToWishlist, } from '../utility/addtoDB';

const BookDetails = () => {
    const { id } = useParams(); // Extracting the book ID from the URL parameters "loader"
    const Bookid = parseInt(id); // Convert the ID to an integer

    const books = useLoaderData();

    const book = books.find(book => book.bookId === Bookid);

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    // const navigate = useNavigate();

    const handleMarkAsRead = (book) => {
        addFavorite(book);
    }

    const handleAddToWishlist = (book) => {
        addToWishlist(book);
    }

    return (
        <div>
            <div className="min-h-[700px]  rounded lg:flex gap-10 space-y-5 lg:space-y-0 p-2 md:p-2">

                {/* Card 01 */}
                <div className='lg:w-1/2  bg-[rgba(19,19,19,0.05)] rounded-lg'>

                    <img src={image} className='h-full md:p-2 lg:p-24  w-full mx-auto' alt="" />
                </div>

                {/* Card 02 */}
                <div className='flex-1 px-5  lg:px-10 space-y-5 bg-white rounded-lg'>
                    <h1 className='text-[40px] font-bold playfair'>{bookName}</h1>
                    <p className='text-xl font-medium'> By : {author}</p>
                    <div className=' border-y border-gray-200 py-5'>
                        <p className='text-xl font-medium'>{category}</p>
                    </div>
                    <div className='border-b border-gray-200 py-5'>
                        <p className='text-[16px] text-[rgba(19,19,19,0.7)]'> <span className='font-bold text-black'>Review :</span> {review}</p>
                        <div className='lg:flex gap-2 my-5 space-x-2 space-y-2 lg:space-x-0 lg:space-y-0'>
                            <p className='text-[16px] text-[rgba(19,19,19,0.7)] btn border-none'> <span className='font-bold text-black'>Tags :</span></p>
                            {
                                tags.map(tag => <div className=" btn text-[#23BE0A] border-none text-xl" key={tag}>#{tag}</div>)

                            }
                        </div>
                    </div>
                    <table>
                        <tbody className='text-[16px] text-[rgba(19,19,19,0.7)]  '>
                            <tr>
                                <td className=''>Number of Pages:</td>
                                <td className='pl-16 font-bold text-black'>{totalPages}</td>
                            </tr>
                            <tr>
                                <td>Publisher:</td>
                                <td className='pl-16 font-bold text-black'>{publisher}</td>
                            </tr>
                            <tr>
                                <td>Year of Publishing:</td>
                                <td className='pl-16 font-bold text-black'>{yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <td>Rating:</td>
                                <td className='pl-16 font-bold text-black'>{rating}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className='flex gap-2 my-5'>
                        {/* <NavLink to={`/bookDetails/${Bookid - 1}`}><button className='btn py-7 px-10 text-xl font-bold text-white bg-[#50B1C9]'>Previous</button></NavLink>
                        <NavLink to={`/bookDetails/${Bookid + 1}`}><button className='btn py-7 px-10 text-xl font-bold text-white bg-[#50B1C9]'>Next</button></NavLink> */}
                        <button onClick={() => handleMarkAsRead(book)} className='btn py-7 px-10 text-xl font-bold'>Mark As Read</button>

                        <button onClick={() => handleAddToWishlist(book)}
                            className='btn py-7 px-10 text-xl font-bold text-white bg-[#50B1C9]'>Add to Wishlist</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;