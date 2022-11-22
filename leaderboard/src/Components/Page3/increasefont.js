import React from 'react';
import "../../../src/App.css";



export class Font extends React.Component {
   constructor(props){
      super(props);

      this.state = {
         count:0,
      };
   }
   render() {
    return ( 
    <div>
    <button onclick = {() => this.setState({count: this.state.count + 2}) } >
        ++
     </button>
     </div>
     );
   }
}