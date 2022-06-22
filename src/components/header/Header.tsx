// @flow 
import * as React from 'react';
import HeaderStyled from './HeaderStyled';
import {BsApple} from "react-icons/bs";



const Header = () => {
    return (
        <HeaderStyled>
        <nav>
            <p><BsApple /></p>
            <h6>Apple</h6>
        </nav>
    </HeaderStyled>
    );
};

export default Header;