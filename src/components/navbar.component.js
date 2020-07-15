import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavigationBar extends Component {
    // convert to DOM
    render(){

        return (
            <div>
            <nav className="navbar navbar-expand-xl navbar-light bg-light" display= "flex">
                <Link to="/" className="navbar-brand">
                <img className="navbar-brand" src="favicon.ico" alt="logo" width="40px"></img></Link>
                <div className="collapse navbar-collapse">  
                
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <Link to= "/author" className="nav-link"> Create New Author </Link>
                    </li>
                    <li className="nav-item">
                    <Link to= "/create" className="nav-link"> Create New Entry </Link>
                    </li>
                    {/* <li className="nav-item">
                    <Link to= "/champions" className="nav-link"> Entries </Link>
                    </li>  */}
                    <li className="nav-item">
                    <Link to= "/journal" className="nav-link"> Entry Log </Link>
                    </li>
                </ul>
                </div>
                
                
                </nav>
                </div>
                
                
           
            

        )
    }
}
