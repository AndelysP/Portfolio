import React from 'react';
import Welcome from './components/Welcome';
import Homepage from './components/Homepage'
import './Sass/App.scss';

const App = () => {
  return (
    <div>
      <Welcome />
      <Homepage />
    </div>
  )
}

export default App