import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Trans} from '@lingui/macro';

function App({onChangeLanguage}: { onChangeLanguage: (locale: "en" | "ru" | "sp") => void }) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Trans>Test english</Trans>
                <Trans>Test 1</Trans>
                <Trans>Test 2</Trans>
            </header>

            <button onClick={() => onChangeLanguage("en")}>set en</button>
            <button onClick={() => onChangeLanguage("ru")}>set ru</button>
            <button onClick={() => onChangeLanguage("sp")}>set sp</button>
        </div>
    );
}

export default App;
