import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import $ from 'jquery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// Adding functionallity to the sidebar buttons
$("#sidebar-button").each((index, button) => {
  $(button).first().on('click', () => {
    $(button).toggleClass('clicked');
  });
});