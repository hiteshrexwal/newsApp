import React, {Component} from 'react';
import AppRouter from './routes/index';

// css imports
import './App.css';
import './utils/util.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './fonts/iconic/css/material-design-iconic-font.min.css'
import './fonts/fontawesome-5.0.8/css/fontawesome-all.min.css'
import 'animate.css'

// js imports
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'

class App extends Component {
    render() {
        return (

            < AppRouter />
    )
        ;
    }
}

export default App;

