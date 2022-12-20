import React from 'react';
import Welcome from './components/Welcome';
import About from './components/About'
import './Sass/App.scss';
import Project from './components/Project';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <header>
      <Welcome />
      </header>
      <main>
      <About />
      <Project />
      <Contact />
      </main>
    </div>
  )
}

export default App