import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Bio from './Bio.js'
import Home from './Home.js'
import Photo from './Photo.js'
import Music from './Music.js'
import Videos from './Videos.js'
import News from './News.js'
import Tour from './Tour.js'
import Contact from './Contact.js'
import img from './profil2.jpg';
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <header>
            <ul>
                <li><Link to ="/">HOME</Link></li>
                <li><Link to ="/bio">BIO</Link></li>
                <li><Link to ="/photo">PHOTO</Link></li>
                <li><Link to ="/music">MUSIC</Link></li>
                <li><Link to ="/videos">VIDEOS</Link></li>
                <li><Link to ="/news">NEWS</Link></li>
                <li><Link to ="/tour">TOUR</Link></li>
                <li><Link to ="/contact">CONTACT</Link></li>
            </ul>

    <div className="centre">
      <Switch>
       <Route exact path='/' component={Home}></Route>
       <Route exact path='/bio' component={Bio}></Route>
       <Route exact path='/photo' component={Photo}></Route>
       <Route exact path='/music' component={Music}></Route>
       <Route exact path='/videos' component={Videos}></Route>
       <Route exact path='/news' component={News}></Route>
       <Route exact path='/tour' component={Tour}></Route>
       <Route exact path='/contact'component={Contact}></Route>
      </Switch>

    </div>
   </header>
  </div>

</BrowserRouter>

    );
  }
}

export default App;
