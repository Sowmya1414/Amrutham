import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TagSelect=()=> {
    return (
        <div className="tags_wrapper">
           <div className="tags_container">
            <p className="tags_data">
                Hair Care
            </p>
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
           </div>
           <div className="tags_container">
            <p className="tags_data">
                Female
            </p>
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
           </div>
           <div className="tags_container">
            <p className="tags_data">
                ₹0 - ₹1000
            </p>
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
           </div>
           <div className="tags_container">
            <p className="tags_data">
                English
            </p>
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
           </div>
        </div>
    );
}

export default TagSelect;