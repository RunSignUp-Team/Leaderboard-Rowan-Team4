import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class SubmitButton extends Component {
  render() 
  {

    

    return  (

      <div>
      <Link to="/blogs">
          <button type="submit" > Submit </button>
      </Link>
      </div>
          
    );
  }
}