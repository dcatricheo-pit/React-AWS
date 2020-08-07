import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./layout/Header";
import {Body} from "./layout/Body";
import {Footer} from "./layout/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
