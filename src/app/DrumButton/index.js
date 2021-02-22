import React  from 'react';





function DrumButton({handleClick, text}){

return(
    <div>
    {text.map((answer, index) => (
        <button className='button' key={index} onClick={()=>{handleClick(answer)}}> {answer} </button>
      ))}
    </div>
);
};

export default DrumButton;