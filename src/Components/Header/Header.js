import React from 'react';
import CustomLink from '../customlink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='nav'>
                <CustomLink  to='/'>Home</CustomLink>
                <CustomLink to="/review">Review</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/dashboard'>Dashboard</CustomLink>
                
            </nav>
        </div>
    );
};

export default Header;