import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class SubmitButton extends Component {
  render() 
  {

    

    return  (

      <div>
      <Link to="/page2">
          <button type="submit" > Submit </button>
      </Link>
      </div>
          
    );
  }
}