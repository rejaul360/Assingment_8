import React from 'react';
import './Navbar.css'
import logo from '../../images/profile.png';

const Navbar = () => {
    return (
        <nav >
            <div className=' header border-bottom'>
                <h3 className='title'>Knowlage Cafe</h3>
                <img className='profile' src={logo} alt="" />
            </div>
        </nav>
    );
};

export default Navbar;