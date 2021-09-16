import React from 'react'
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import Home from './components/Home';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './add/button/button';

function App() {
  return(
    <div className="App">
      <header className="App-header">
        <Button label="click me!!!"/>
      </header>
    <Router>
    <Navbar/>
    
      <Route path='/' exact>
        <Home/>
      </Route>
      <Route path="/notes">
        <Note/>
      </Route>
      <Route path='/create'>
        <CreateNote/>
      </Route>
    </Router>
    </div>

  )
}
export default App;
