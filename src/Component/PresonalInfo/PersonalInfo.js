import React from 'react';
import picture from '../../Picture/dipu.png'
import './PersonalInfo.css'

const PersonalInfo = () => {
    return (
        <div className=' container  p-5 '>

            <div className='row'>
                <div className='col-sm-12 col-lg-6  text-white'>
                    <div className='my-information'>
                        <h2>Hello , my name is</h2>
                        <h1>Dipankar Halder</h1>
                        <h3>And I'm <span className='text-color'>Free|</span></h3>
                        <button className='btn  btn-danger px-5 py-3 fs-3 fw-bold shadow'>Hire me</button>
                    </div>
                </div>
                <div className='col-sm-12 col-lg-6  mt-2  shadow img-style'>
                    <img src={picture} alt="" />
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;