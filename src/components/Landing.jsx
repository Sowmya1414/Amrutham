import React from 'react';
import Dropdown from './Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Landing=()=> {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h2>Find expert Doctors for an In-clinic session here</h2>
                    </div>
                    <div className="input__description">
                        <Dropdown />
                        <div className="search__description">
                        <input type="text" id="search" maxLength={30}name="q" placeholder="eg. Doctor, specialisation, clinic name"></input>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                        </div>
                    </div>
                </div>
            </header>
        </section>
    );
}

export default Landing;