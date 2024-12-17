import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

import Navbar from './components/nav/Navbar';
import Home from './pages/Home';
import Team from './pages/Team';
import Publications from './pages/Publications';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';




function App() {
  return (
    <html lang='en'>
    <div className="App">
      <Router>
        <Navbar/>
        <main>
        <Routes>
          <Route path='sub-biomon-ro-project/home' element={<Home></Home>}></Route>
          <Route path='sub-biomon-ro-project/' element={<Home></Home>}></Route>
          <Route path='sub-biomon-ro-project/team' element={<Team></Team>}></Route>
          <Route path='sub-biomon-ro-project/publications' element={<Publications></Publications>}></Route>
          <Route path='sub-biomon-ro-project/news' element={<News></News>}></Route>
          <Route path='sub-biomon-ro-project/gallery' element={<Gallery></Gallery>}></Route>
        </Routes>
        </main>
      </Router>
      <Footer/>  
    </div>
    </html>
  );
}

export default App;
