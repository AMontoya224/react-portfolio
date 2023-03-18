import React, { useState, useRef } from 'react';
import { Switch, HashRouter, Route, BrowserRouter} from 'react-router-dom';
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
  const [selectLan, setSelectLan] = useState( false );
  const testRef1 = useRef( null );
  const testRef2 = useRef( null );
  const testRef3 = useRef( null );
  const testRef4 = useRef( null );

  const onSelectLeft = newSelect => {
    setSelectLeft( newSelect );
  };

  const onSelectLan = newSelect => {
    setSelectLan( newSelect );
  };

  const hist = createBrowserHistory();
  
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,400,0,0" rel="stylesheet"/>
      <BrowserRouter history={hist}>
        <Header onSelectLeft={onSelectLeft} testRef1={testRef1} selectLan={selectLan} onSelectLan={onSelectLan}/>
        <Switch>
          <Route exact path="/" render={ routeProps => <Home onSelectLeft={onSelectLeft} selectLeft={selectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4} selectLan={selectLan} {...routeProps} />}/>
          <Route exact path="/projects" render={ routeProps => <Works onSelectLeft={onSelectLeft} selectLeft={selectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4} selectLan={selectLan} {...routeProps} />}/>
          <Route exact path="/projects/developer" render={ routeProps => <WorksD onSelectLeft={onSelectLeft} selectLeft={selectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4} selectLan={selectLan} {...routeProps} />}/>
          <Route exact path="/projects/electronic" render={ routeProps => <WorksE onSelectLeft={onSelectLeft} selectLeft={selectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4} selectLan={selectLan} {...routeProps} />}/>
          <Route exact path="/aboutme" render={ routeProps => <AboutMe onSelectLeft={onSelectLeft} selectLeft={selectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4} selectLan={selectLan} {...routeProps} />}/>
          <Route exact path="/contact" render={ routeProps => <Contact onSelectLeft={onSelectLeft} selectLeft={selectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4} selectLan={selectLan} {...routeProps} />}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
