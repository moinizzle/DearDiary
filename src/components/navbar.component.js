import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';


export default class NavigationBar extends Component {
    // convert to DOM
    render(){

        return (
        
            <nav className="navbar navbar-expand-sm navbar-light bg-light" display= "flex">
                <Link to="/" className="navbar-brand">
                
                <img className="navbar-brand" src="favicon.ico" alt="logo" width="40px"></img></Link>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">  
                
                <ul className="navbar-nav mr-auto" display="flex">
                    <li className="nav-item">
                    <Link to= "/author" className="nav-link"> Create New Author </Link>
                    </li>
                    <li className="nav-item">
                    <Link to= "/create" className="nav-link"> Create New Entry </Link>
                    </li>
                    <li className="nav-item">
                    <Link to= "/journal" className="nav-link"> Entry Log </Link>
                    </li>
                </ul>
                </div>                
                </nav>
        )
    }
}
