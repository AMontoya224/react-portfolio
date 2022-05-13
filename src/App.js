import React, { useState } from 'react';
import { Switch, BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Left from './components/Left/Left';
import AboutMe from './pages/AboutMe/AboutMe';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Works from './pages/Works/Works';


function App() {
  const [selectLeft, setSelectLeft] = useState( 'home' );

  const onSelectLeft = newSelect => {
    setSelectLeft( newSelect );
  };

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"></link>
      <BrowserRouter>
        <Header onSelectLeft={onSelectLeft}/>
        <Left onSelectLeft={onSelectLeft} selectLeft={selectLeft}/>
        <Switch>
          <Route exact path="/" render={ routeProps => <Home {...routeProps} />}/>
          <Route exact path="/works" render={ routeProps => <Works {...routeProps} />}/>
          <Route exact path="/aboutme" render={ routeProps => <AboutMe {...routeProps} />}/>
          <Route exact path="/contact" render={ routeProps => <Contact {...routeProps} />}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
