import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

import Navbar from './components/nav/Navbar';
import Home from './pages/Home';
import Team from './pages/Team';
import Publications from './pages/Publications';
import News from './pages/News';
import Gallery from './pages/Gallery';




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/team' element={<Team></Team>}></Route>
          <Route path='/publications' element={<Publications></Publications>}></Route>
          <Route path='/news-and-activities' element={<News></News>}></Route>
          <Route path='/gallery' element={<Gallery></Gallery>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
