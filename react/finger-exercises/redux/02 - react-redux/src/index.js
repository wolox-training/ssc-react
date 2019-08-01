import React from 'react';
import ReactDOM from 'react-dom';
import App from '@screens/App';

import { DATA } from './constants/data';
import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App data={DATA} />, document.getElementById('root'));
registerServiceWorker();
