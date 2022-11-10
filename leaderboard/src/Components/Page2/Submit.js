import React from "react";
import { Link } from "react-router-dom";

class Submit extends React.Component {
  render() {
    return  (

      <div>
      <Link to="/page3">
          <button type="submit" > Submit </button>
      </Link>
      </div>
          
    );  }

}

export default Submit;