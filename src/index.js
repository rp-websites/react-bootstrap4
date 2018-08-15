import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Routes from "./routes";

const App = () => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes />
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
