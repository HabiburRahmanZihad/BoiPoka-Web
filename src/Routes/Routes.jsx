import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Error from '../pages/ErrorPage/Error';
import Home from '../pages/Home/Home';
import BookDetails from '../components/BookDetails/BookDetails';
import ListedBooks from '../pages/listedBooks/ListedBooks';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Error></Error>,

        children: [
            {
                index: true,
                loader: () => fetch('../booksData.json'),
                element: <Home></Home>,
                hydrateFallbackElement: <div className="skeleton h-32 w-32"></div>
            },

            {
                path: 'bookDetails/:id',
                loader: () => fetch('../booksData.json'),
                Component: BookDetails,
                hydrateFallbackElement: <div className="flex w-52 flex-col gap-4">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            },

            {
                path: 'listedbook',
                loader: () => fetch('../booksData.json'),
                Component: ListedBooks,
                hydrateFallbackElement: <div className="skeleton h-32 w-32"></div>
            },
        ]
    },
]);

