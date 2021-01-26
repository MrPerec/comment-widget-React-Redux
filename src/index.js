`use strict`;

import './styles/style.css';
import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import comments from './reducers';
import App from './containers/App.js';
import {loadState, saveState} from './storage/localStorage.js';

const initialState = loadState();

const store = createStore(comments, initialState);

store.subscribe( () => saveState( store.getState() ));

render( 
	<App store={store} />, 
	document.querySelector(`.root`) 
);