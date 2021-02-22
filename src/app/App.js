
import './App.css';
import DrumButton from './DrumButton/index';
import React, {useState,useReducer} from 'react';
import {Howl, Howler} from 'howler';
import useSound from 'use-sound';





function handleClick(event){
  switch(event){
    case 'bump':
      console.log('a');
      start(audioOne);
       break;
    case 'jump':
      console.log('s'); 
      start(audioTwo)
      break;
    case 'crash':
      console.log('d')
      start(audioThree)
      break;
    case 'pew':
      start(audioFour)
      break;
  }
};



const initialArray= ['bump','jump','crash','pew'];

const soundMp3=['http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg',
'http://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg',
'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/explosion%2001.wav',
'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/player_shoot.wav',
''
]

let audioOne = new Audio(soundMp3[0])
let audioTwo = new Audio(soundMp3[1])
let audioThree = new Audio(soundMp3[2])
let audioFour = new Audio(soundMp3[3])

  const start = (audio) => {
    audio.play()
  }


function App() {
  const[drum,drumset]=useState(initialArray)



  
  return (
    <div className="App">
      <div id='body'>
      <h1 id="header">Retro Game Sounds</h1>
        <DrumButton handleClick={handleClick} text={drum} sound={soundMp3}/>
        </div>
    </div>
  );
}

export default App;
