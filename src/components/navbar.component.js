import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import $ from 'jquery';


export default class NavigationBar extends Component {
    // convert to DOM
    render(){

        return (
            <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light" display= "flex" position="fixed">
            
                <Link to="/" className="navbar-brand">
                
                <img className="navbar-brand" src="favicon.ico" alt="logo" width="40px"></img></Link>
                
                <div className="collapse navbar-collapse">  
                
                <ul className="navbar-nav mr-auto" display="flex">
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

                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
                
                </div>
                
                
           
            

        )
    }
}
