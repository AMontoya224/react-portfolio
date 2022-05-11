import './App.css';
import Header from './components/Header/Header';
import Left from './components/Left/Left';
import Home from './pages/Home/Home';


function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"></link>
      <Header/>
      <Left/>
      <Home/>
    </div>
  );
}

export default App;
