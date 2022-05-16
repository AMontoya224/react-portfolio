import React, { useState } from 'react';
import { Switch, BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AboutMe from './pages/AboutMe/AboutMe';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Works from './pages/Works/Works';
import WorksD from './pages/Works/WorksD';
import WorksE from './pages/Works/WorksE';


function App() {
  const [selectLeft, setSelectLeft] = useState( '#1' );

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
        <Switch>
          <Route exact path="/" render={ routeProps => <Home selectLeft={selectLeft} onSelectLeft={onSelectLeft} {...routeProps} />}/>
          <Route exact path="/works" render={ routeProps => <Works selectLeft={selectLeft} onSelectLeft={onSelectLeft} {...routeProps} />}/>
          <Route exact path="/works/developer" render={ routeProps => <WorksD selectLeft={selectLeft} onSelectLeft={onSelectLeft} {...routeProps} />}/>
          <Route exact path="/works/electronic" render={ routeProps => <WorksE selectLeft={selectLeft} onSelectLeft={onSelectLeft} {...routeProps} />}/>
          <Route exact path="/aboutme" render={ routeProps => <AboutMe selectLeft={selectLeft} onSelectLeft={onSelectLeft} {...routeProps} />}/>
          <Route exact path="/contact" render={ routeProps => <Contact onSelectLeft={onSelectLeft} {...routeProps} />}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
