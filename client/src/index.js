import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom"
import store from "./redux/store";
import dotenv from "dotenv"
import axios from 'axios';

dotenv.config()
axios.defaults.baseURL = process.env.REACT_APP_API || `http://localhost:3001`

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

