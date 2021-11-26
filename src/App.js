import './App.css';
import Hero from './components/Hero/Hero';
import Sidebar from './components/Sidebar/Sidebar';
import MainView from './components/MainView/MainView';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Home from './components/Home/Home';
import Dictionary from './components/Dictionary/Dictionary';
import Contact from './components/Contact/Contact';
import Articles from './components/Articles/Articles';
import {useState} from 'react';
import MobileMenu from './components/MobileMenu/MobileMenu';

function App() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <Router>
    <div className="App">
      <MobileMenu isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About}/>
      <Route path="/dictionary" exact component={Dictionary}/>
      <Route path="/contact" exact component={Contact}/>
      <Route path="/articles" exact component={Articles}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
