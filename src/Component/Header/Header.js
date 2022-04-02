import React from 'react';
import { Link } from 'react-router-dom';
import PersonalInfo from '../PresonalInfo/PersonalInfo';
import dipankar from '../../Picture/dipu.png'
import './Header.css';

const Header = () => {
    return (

        <div className='bg-dark p-4'>
            <div className='container d-flex justify-content-between'>
                <h1 className='mt-2 text-white fw-bold'>Portfo<span className='text-color'>lio.</span></h1>

                <nav className='nav-link '>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/Services">Services</Link>
                    <Link to="/Contact">Contact</Link>
                    <img src={dipankar} alt="" />
                </nav>

            </div>
            <div className='mt-5'>
                <PersonalInfo></PersonalInfo>
            </div>
        </div>

    );
};

export default Header;