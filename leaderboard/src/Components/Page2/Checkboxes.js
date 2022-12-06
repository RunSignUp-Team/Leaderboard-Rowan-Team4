
import React from "react";
import City from "./City";
import State from "./State";
import Gender from "./Gender";
import Age from "./Age";
import Submit from "./Submit";


class Checkboxes extends React.Component {

  

  render() {
    return <form method="LAST" action="page3.html">
  {}
  <City></City>
  <br></br>
  <State></State>
  <br></br>
  <Gender></Gender>
  <br></br>
  <Age></Age>
  <br />
  <br />
  <Submit />
    </form>;
  }

}
export default Checkboxes;