import React from 'react';
import logo from '../logo.svg';

const Header = () => (
    <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Flat your Arrays</h1>
        <p> This app will flatten an array of arbitrarily nested arrays of integers into a flat array of integers. e.g.</p>
        <pre><code>[[1,2,[3]],4] = [1,2,3,4]</code></pre>
    </header>
)

export default Header;
