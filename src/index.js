import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './component/app';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <App />
);

// ReactDOM.render(
//   <h1>Hello world</h1> ,
//   document.getElementById("root")
// );

