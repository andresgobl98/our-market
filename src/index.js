import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Slider from './Slider';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Slider />
  </React.StrictMode>,
  document.getElementById('sliderIMG')
);

serviceWorker.unregister();
