import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Poets from './components/Poets/Poets';

import MainContainer from './components/MainContainer/MainContainer';

function App() {

  return (

    <div className="body-container">
      <Header></Header>

      <MainContainer></MainContainer>


    </div>
  );
}

export default App;
