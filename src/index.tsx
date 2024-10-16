import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import reportWebVitals from './reportWebVitals';

import './styles/reset.css'
import './styles/module.css'
import './styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Main />);

reportWebVitals();
