import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './MyService.css'

const MyService = () => {
    const element = <FontAwesomeIcon icon={faDatabase} />

    return (
        <div className='bg-dark pb-5'>
            <div className='container text-white '>
                <h1 className='pt-4'>My Services</h1>
                <p className='text-color'>--What i provider--</p>

                <div className='row g-3'>
                    <div className='col-lg-4 '>
                        <div className='service-card'>
                            <h1>{element}</h1>
                            <h1>Web Design</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio autem, maiores quidem unde accusamus dolorem nesciunt temporibus labore, ad nobis magnam .</p>
                        </div>
                    </div>
                    <div className='col-lg-4 '>
                        <div className='service-card '>
                            <h1>{element}</h1>
                            <h1>Web Design</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio autem, maiores quidem unde accusamus dolorem nesciunt temporibus labore, ad nobis magnam .</p>
                        </div>
                    </div>
                    <div className='col-lg-4 '>
                        <div className='service-card'>
                            <h1>{element}</h1>
                            <h1>Web Design</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio autem, maiores quidem unde accusamus dolorem nesciunt temporibus labore, ad nobis magnam .</p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default MyService;