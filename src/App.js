import React from 'react';
//Componentes
import AllCharacters from './components/allCharacters/AllCharacters';
import Header from './components/header/Header'

function App() {
  return (
    <div className='app'>
      <Header/>
      <AllCharacters/>
    </div>
  );
}

export default App;
