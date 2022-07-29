import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './Components/Quiz';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/quiz' element={<Quiz/>} /> // new updates instead of Switch, Routes is used............
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;