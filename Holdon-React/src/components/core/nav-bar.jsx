import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <header>
        <div className='row mid-header-row'>
          <div className='left-nav col-4 col-lg-3 col-md-3'>
            <i className='far fa-user' />
            <i className='fas fa-shopping-basket' />
            <i className='far fa-heart' />
          </div>
          <div className='mid-nav col-8 col-lg-6 text-left text-lg-center text-md-center'>
            <Link to='/'>
              <img
                src={'/assets/images/holdon.svg'}
                className='ml-5 ml-lg-0 ml-md-0 cursor-pointer'
                alt='Logo'
              />
            </Link>
          </div>
          <div className='right-nav col-12 col-lg-3 pt-3 pt-lg-none'>
            <div className='col-2 d-lg-none menu-btn'>
              <i className='fas fa-bars fa-lg menu-btn_burger' />
            </div>
            <div className='col-10 col-lg-12'>
              <input type='search' placeholder='מילות חיפוש' />
              <i className='fas fa-search header-search-icon' />
            </div>
          </div>
        </div>
        <div className='row bottom-header-row'>
          <ul className='menu-nav'>
            <li className='d-lg-none closeMenu'>
              <a>
                <i className='fas fa-times' />
              </a>
            </li>
            <li>
              <Link to='contact'>צור קשר</Link>
            </li>
            <li>
              <Link to='friend'>חבר מועדף</Link>
            </li>
            <li>
              <Link to='blog'>בלוג</Link>
            </li>
            <li>
              <Link to='products'>המוצרים שלנו</Link>
            </li>
            <li>
              <Link to='story'>הסיפור שלנו</Link>
            </li>
            <li>
              <Link to='/'>דף הבית</Link>
            </li>
          </ul>
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;
