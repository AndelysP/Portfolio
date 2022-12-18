import React from 'react';
import '../Sass/Welcome.scss';
import moon from '../img-planets/moon.png';
import neptune from '../img-planets/neptune.png'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  // const [loopNum, setLoopNum] = useState(0);
  // const [deletingNum, setDeletingNum] = useState(false);
  // const animation = ["Andélys Pluquin", "Développeuse Web"];
  // const [text, setText] = useState('');
  // const [delta, setDelta] = useState(300 - Math.random() * 100)
  // const time = 2000;

  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     tick();
  //   }, delta)

  //   return() => {clearInterval(ticker)};
  // }, [text])

  // const tick = () => {
  //   let i = loopNum % animation.length;
  //   let fullText = animation[i];
  //   let updatedText = deletingNum ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

  //   setText(updatedText);

  //   if (deletingNum) {
  //     setDelta(prevDelta => prevDelta /2)
  //   }

  //   if (!deletingNum && updatedText === fullText) {
  //     setDeletingNum(true);
  //     setDelta(time);
  //   } else if (deletingNum && updatedText === '') {
  //     setDeletingNum(false);
  //     setLoopNum(loopNum +1);
  //     setDelta(500);
  //   }
  // }


  return (
    <section className="wrapper">      
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title">
        <p>Je suis</p>
        <div id="text">
          <h1>Andélys Pluquin</h1>
        </div>
        <Link to="/homepage">
        <button>Bienvenue sur mon portfolio</button>
        </Link>
      </div>
      <div className="planets-img">
        <div id="planets1">
          <img src={moon} alt="moon" />
        </div>
        <div id="planets2">
          <img src={neptune} alt="neptune" />
        </div>
      </div>      
    </section>
  )
}

export default Welcome