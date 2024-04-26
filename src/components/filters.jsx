import React from 'react';

const filters=()=> {
    return (
        <div id="filter_container">
        <select class="filter_tags" defaultValue="DEFAULT">
        <option value="DEFAULT">Enterprise</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <select class="filter_tags" defaultValue="DEFAULT">
        <option value="DEFAULT">Gender</option>
          <option value="optionA">Option A</option>
          <option value="optionB">Option B</option>
          <option value="optionC">Option C</option>
        </select>
        <select class="filter_tags" defaultValue="DEFAULT">
        <option value="DEFAULT">Fees</option>
          <option value="alpha">Alpha</option>
          <option value="beta">Beta</option>
          <option value="gamma">Gamma</option>
        </select>
        <select class="filter_tags" defaultValue="DEFAULT">
        <option value="DEFAULT">Language</option>
          <option value="alpha">Alpha</option>
          <option value="beta">Beta</option>
          <option value="gamma">Gamma</option>
        </select>
        <select class="filter_tags f_all" defaultValue="DEFAULT">
        <option value="DEFAULT">All filters</option>
          <option value="alpha">Alpha</option>
          <option value="beta">Beta</option>
          <option value="gamma">Gamma</option>
        </select>
      </div>
    );
}

export default filters;