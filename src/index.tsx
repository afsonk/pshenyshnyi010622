import React from 'react';
import ReactDOM from 'react-dom/client';
import {Chart} from "./containers";
import "./index.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Chart />);