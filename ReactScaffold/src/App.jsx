import React, {Component} from 'react';
import "./App.style.less"
class App extends Component {
 render() {
  return(
   <div>
    <h1> Enviornment {process.env.NODE_ENV}</h1>
   </div>
  );
 }
}
export default App