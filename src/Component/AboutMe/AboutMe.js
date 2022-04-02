import React from 'react';
import dipankar from '../../Picture/dipu1.png'
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className='container mt-5 mb-5'>
            <h1 className='fw-bold text-center'>About Me</h1>
            <p className='text-color fs-5 fw-bold text-center'>---- Who I am ----</p>
            <div className='row '>
                <div className='col-sm-12 col-lg-6 about-img '>
                    <img src={dipankar} alt="" />
                </div>
                <div className='col-sm-12 col-lg-6  w-75%'>
                    <div className='w-75 ms-5 h-100 pt-5 mt-5'>
                        <h3>I am Dipankar and I am a <span className='text-color fw-bold'>Developer |</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam distinctio dolor enim cum fugit reiciendis sequi, earum repellendus voluptates vero beatae dolore qui ea architecto non itaque sunt minima consectetur?</p>
                        <button className='btn btn-danger'>Download CV</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutMe;