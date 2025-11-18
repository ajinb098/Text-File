import React from 'react';

function Greeting({ name }) {
  return <p>Hello Hi, {name || 'Guest'}!</p>; 
}

export default Greeting;