import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <nav className="header">
            {/*  logo on the left -> */}
            <Link to="/">
            <img 
                className="header_logo" 
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="header"  
            />
            </Link>

            {/* search box     */}
            <div className="header_search">
                <input type="text" className="header_searchInput"/>
                <SearchIcon className="header_searchIcon" />
            </div>

            {/* 3 Links */}
            <div className="header_nav">
                {/* 1st linke */}
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_option_line_one">Hello,</span>
                        <span className="header_option_line_two">Sign in</span>
                    </div>
                </Link>
                {/* 2nd link  */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_option_line_one">Return</span>
                        <span className="header_option_line_two">&amp; Orders</span>
                    </div>
                </Link>
                {/* 3rd link  */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_option_line_one">Your</span>
                        <span className="header_option_line_two">Prime</span>
                    </div>
                </Link>
                {/* Basket icon with number */}
                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        {/* Basket icon  */}
                        <ShoppingBasketIcon className="header_shopping_basket"/>
                        {/* Number of items in the basket  */}
                        <span className="header_option_line_two header_basket_count">0</span>
                    </div>

                </Link>
            </div>

        </nav>
    )
}

export default Header