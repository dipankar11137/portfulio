import React from 'react';
import './MySkill.css'

const MySkill = () => {
    return (
        <div className='container mt-5 p-5'>
            <h1>My Skill</h1>

            <p>--What I Know--</p>
            <div className=' row'>
                <div className='col-lg-6 '>
                    <div className='p-4 '>
                        <h3 >My Creative Skill & expriences</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit vero adipisci saepe architecto, repellendus rem, doloremque praesentium totam esse, temporibus voluptas dicta ipsa magnam et exercitationem delectus vitae fugit deserunt laudantium iure optio minima? Ipsum quibusdam ut illo autem consectetur.</p>
                        <button className='btn btn-danger'>Read More</button>
                    </div>
                </div>
                <div className='col-lg-6 '>
                    <div>
                        <h5>HTML</h5>
                        <p className='p-edit'></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MySkill;