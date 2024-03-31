import React ,{Component} from 'react'
import Navbar from "./Components/Navbar.jsx"
import './App.css'
import News from './Components/News.jsx';

export default class App extends Component {
  render(){
  return (
    <>
    <Navbar/>
    <News/>    
    </>
  );
}
}


