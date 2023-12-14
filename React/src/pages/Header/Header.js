import React from 'react'
import { Link } from 'react-router-dom';
import '../Header/Header.scss';
import profile from '../../assets/img/profile_img.svg';
import logo from '../../assets/img/logo.svg';
import BackArrow from '../../assets/img/back-arrow.svg';

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='header_inner'>
                    <div className='left_part'>
                        <button className='btn btn-light btn_close d-lg-none d-md-block' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                        </button>

                        <a href='#'>
                            <img src={BackArrow} alt='Back Arrow' />
                        </a>
                        <p>Product Listing</p>

                    </div>
                    <div className="right_part">

                        <div>
                            <img src={logo} alt='logo' />
                        </div>

                    </div>
                </div>



            </header>
        </>
    )
}

export default Header
