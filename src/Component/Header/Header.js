import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='bg-dark'>
                <div className='container d-flex justify-content-between'>
                    <h1 className='mt-2 text-white'>Portfo<span className='text-color'>lio.</span></h1>

                    <nav className='nav-link '>
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/Services">Services</Link>
                        <Link to="/Contact">Contact</Link>
                    </nav>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Header;