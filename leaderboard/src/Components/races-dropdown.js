import React, { Component } from 'react';

export class RacesDropdown extends Component {
    render() 
    {
        return(   
        <select name="race-names" id="race-names">
        <option value="race1">Race 1</option>
        <option value="race2">Race 2</option>
        <option value="race3">Race 3</option>
        <option value="race4">Race 4</option>
        <option value="race5">Race 5</option>
         </select>)   
    }
   

}