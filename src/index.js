import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from "react-router-dom"

const root = ReactDOM.createRoute(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>
    </React.StrictMode>
)