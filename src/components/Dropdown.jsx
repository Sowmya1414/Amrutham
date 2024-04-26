import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Dropdown=()=>{
    return (
        <div className='drpdwn__container'>
            <FontAwesomeIcon  color="#3A643B"icon="fa-solid fa-location-dot" />
            <select id="location_box" name="location" defaultValue="DEFAULT">
            <option value="DEFAULT">Select Location</option>
        <option value="New York">New York</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Chicago">Chicago</option>
        <option value="Houston">Houston</option>
        <option value="Miami">Miami</option>
    </select>
        </div>
    );
}

export default Dropdown;