import React from 'react';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <h1>Hello world...</h1> 
);

// ReactDOM.render(
//   <h1>Hello world</h1> ,
//   document.getElementById("root")
// );

