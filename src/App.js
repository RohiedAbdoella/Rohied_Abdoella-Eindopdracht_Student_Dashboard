import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Homepage.js';
import Graphviews from './components/Graphviews.js';
import Tableview from './components/Tableview.js';
import Studentview from './components/Studentview.js';
import GraphDetails from './components/GraphDetails.js';
import assignments from './data/assignment_data.js';
import './styles/App.css';


function App() {

  function refreshPage() {
    window.location.reload();
  };

  return (
    <div>
      <Header />

      <nav>
        <ul className="navbar">
          <li onClick={refreshPage}>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/Graphviews">Graphviews</Link>
          </li>
          <li>
            <Link to="/Tableview">Tableview</Link>
          </li>
          <li>
            <Link to="/Studentview">Recruit our students!</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Graphviews/*' element={<Graphviews />} />
        <Route path='/Tableview' element={<Tableview />} />
        <Route path='/Studentview' element={<Studentview />} />
        <Route path="/Student/:name" element={<GraphDetails
          data={assignments} />} />
      </Routes>

      <div className='push'></div>
      <Footer />

    </div>
  );
};

export default App;
