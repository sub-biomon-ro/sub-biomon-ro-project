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
          <Route path='sub-biomon-ro-project/home' element={<Home></Home>}></Route>
          <Route path='sub-biomon-ro-project/' element={<Home></Home>}></Route>
          <Route path='sub-biomon-ro-project/team' element={<Team></Team>}></Route>
          <Route path='sub-biomon-ro-project/publications' element={<Publications></Publications>}></Route>
          <Route path='sub-biomon-ro-project/news-and-activities' element={<News></News>}></Route>
          <Route path='sub-biomon-ro-project/gallery' element={<Gallery></Gallery>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
