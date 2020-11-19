import React, {Component} from "react"
import './App.css';
import image from "./image15.jpg"
import Timer from "./Component/Timer"

class App extends Component {
  state = {
    name : "Mahdi",
    bio : "Hello bio",
    Profession : "etudiant",
    imgSrc : <img className='image' src={image}  alt='M' />
    
  }


  render(){
    return (
    <div className="App">
      <h1> {this.state.name} </h1>
      <h2> {this.state.bio} </h2>
      <h2> {this.state.Profession} </h2>
      {this.state.imgSrc}
      <Timer />
    </div>
  );
}}
  

export default App;
