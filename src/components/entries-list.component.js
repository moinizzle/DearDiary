import React, { Component } from 'react';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from "axios";


export default class EntriesList extends Component{

    constructor(props){
        super(props);

        this.state = {
            entries : []
        };
    }

    componentDidMount(){
        
        axios.get('http://localhost:' + process.env.PORT +'/entries/')
        .then(res =>
            this.setState({ entries: res.data.map(
                entry => [entry.author, entry.entry] )}))
        .catch(err => console.log(err))
        //alert(this.state.entries.toString());
    }

    render(){
        
        return(

        <div className="container">
        <table className="table table-hover">
        <thead className="thead-dark">
            <tr>
                <th scope="col">Author</th>
                <th scope="col">Entry</th>
            </tr>
        </thead>
        <tbody>
                {this.state.entries.reverse().map((author, index) => {
                    return (
                        <tr key={index}><td><pre fontFamily="Times New Roman">{author[0]}</pre></td><td><pre>{author[1]}</pre></td></tr>
                        )
                    })}
        </tbody>
        </table>
        </div>
        )
    }
}
