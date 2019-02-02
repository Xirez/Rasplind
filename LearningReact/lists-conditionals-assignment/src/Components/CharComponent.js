import React from 'react';

const style = {
  display: 'inline-block', 
  padding: '16px', 
  textAlign: 'center', 
  margin: '16px', 
  border: '1px solid black',
  backgroundColor: 'rgb(128, 121, 121)'
}

const CharComponent = (props) => {
  return (
    <p style={style} onClick={props.click}>{props.char}</p>
  );
};

export default CharComponent;