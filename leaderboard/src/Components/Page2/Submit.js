import React from "react";
import { Link } from "react-router-dom";
const { ipcRenderer } = window.require('electron');

export default function Submit(){


    return  (

      <div>
      <Link to="/page3">
          <button type="submit" > Submit </button>
      </Link>
      </div>
          
    );  

}

