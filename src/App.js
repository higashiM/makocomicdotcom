import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectCard from './components/ProjectCard';
import { projectText } from './resources/projectCards/projectText';
import DisplayProjectCard from './DisplayProjectCard';
import SolidGameCardDemo from './Test';
import TabPanel from './components/NavBar';

function App() {
	return TabPanel();
}

export default App;
