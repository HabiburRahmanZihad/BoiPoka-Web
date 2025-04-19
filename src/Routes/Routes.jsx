import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Error from '../pages/ErrorPage/Error';
import Home from '../pages/Home/Home';
import BookDetails from '../components/BookDetails/BookDetails';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Error></Error>,

        children: [
            {
                index: true,
                loader: () => fetch('booksData.json'),
                element: <Home></Home>
            },
            { path: 'about', element: <div>hi im about</div> },
            {
                path: 'bookDetails/:id',
                loader: () => fetch('../booksData.json'),
                Component: BookDetails,
            },
        ]
    },
]);

