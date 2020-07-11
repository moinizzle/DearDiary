import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; // import bootstrap
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from 'react-router';

//import logo from './logo.svg';
//import './App.css';

// imprt all the components
import NavigationBar from "./components/navbar.component";
import Home from "./components/home-component";
import CreateAuthor from "./components/create-author.component";
import CreateEntry from "./components/create-entry.components";
import EntriesList from "./components/entries-list.component";



function App() {  
  return (
    <Router>
    <div className="container-fluid">
      
      <NavigationBar />
      <br></br>
      
        <Switch>
   
        <Route exact path="/" component={withRouter(Home)} />
        <Route path="/author" component={withRouter(CreateAuthor)} />
        <Route path="/create" component={withRouter(CreateEntry)} /> 
        <Route path="/entries" component={withRouter(EntriesList)} />
        </Switch>
        
    </div>
    </Router>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
