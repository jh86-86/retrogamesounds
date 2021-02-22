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
  


  