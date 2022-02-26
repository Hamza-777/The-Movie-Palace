import React, { Fragment } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ getParams }) => {

    const changeHandler = e => {
        getParams(e.target.value);
    }

    return (
        <Fragment>
            <nav className='navbar flex-center justify-evenly'>
                <div className='navbar-left'>
                    <h1 className='logo'>The Movie Palace</h1>
                </div>
                <div className='navbar-mid flex-center'>
                    <div className='search flex-center'>
                        <i className="fa-solid fa-magnifying-glass magnifier"></i>
                        <input type='search' placeholder='Search for a movie...' className='searchbar' onChange={changeHandler} />
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}

export default Navbar;