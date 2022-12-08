import React from 'react';

import HomePage from "./pages/HomePage";
import Clock from "./components/Clock";
import './App.css';

function App() {
    return (
        <div className="app">
            <HomePage/>
            <Clock/>
        </div>
    );
}

export default App;
