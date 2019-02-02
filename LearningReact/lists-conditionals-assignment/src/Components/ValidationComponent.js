import React from 'react';

let validInput = '';
const validation = (props) => {
  if(props.length <= 4) {
    validInput = 'Text too short! Keep typing!';
  } else {
    validInput = 'The text is long enough..';
  }

  return (
    <p>{validInput}</p>
  );
}

export default validation;