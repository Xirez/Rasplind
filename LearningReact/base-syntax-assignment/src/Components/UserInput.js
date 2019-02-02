import React from 'react';

const userInput = (props) => {
  const style = {
    width: '250px',
    height: '30px',
    fontSize: '28px'
  };

  return (
    <input style={style} type="text" default={props.username} onChange={props.changed} value={props.username}/>
  );
}

export default userInput;