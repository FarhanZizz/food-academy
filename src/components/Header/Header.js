import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1 className='header-text'> <FontAwesomeIcon icon={faUtensils}></FontAwesomeIcon> Food Academy</h1>
        </div>
    );
};

export default Header;