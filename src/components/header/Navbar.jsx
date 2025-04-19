import React from 'react';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

// const MySwal = withReactContent(Swal)

const handleWorkinProgress = () => {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<p>Work in Progress</p>'
    });
}


const Navbar = () => {
    const links =
        <>
            <li className='text-xl'><NavLink to='/'>Home</NavLink></li>
            <li className='text-xl'><NavLink to='/about'>Listed Books</NavLink></li>
            <li className='text-xl'><NavLink to='/book'>Pages to Read</NavLink></li>
        </>;

    return (
        <div>
            <div className="navbar my-6 md:my-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <NavLink to='/' className={({ isActive }) => isActive ? '' : ''}><p className="text-3xl font-bold">Book Vibe</p></NavLink>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-4 ">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end gap-4">
                    <p onClick={handleWorkinProgress} className="btn btn-success text-white py-5">Sign In</p>
                    <p onClick={handleWorkinProgress} className="btn btn-accent text-white py-5">Sign Up</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;