import React from 'react'
import  ReactDOM  from 'react-dom/client';
import App from './App.js'

import {applyMiddleware, createStore} from 'redux'
import Reducer from './Redux/Reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'


// ReactDOM.render(<App/>,document.getElementById('root'))

// 
let myStore =createStore(Reducer,applyMiddleware(thunk))


const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<Provider store={myStore}><App></App></Provider>)