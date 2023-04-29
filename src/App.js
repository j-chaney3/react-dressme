import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from '../src/components/Header';

function App() {
	return (
		<div className="App">
			<Header />
			<p>Let's get started</p>
		</div>
	);
}

export default App;
