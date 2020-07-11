import React, { Component } from 'react';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from "axios";


export default class CreateEntry extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            authorButton: '',
            authors: [],
            //author: '',
            entry: ''
        };
        
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleEntry = this.handleEntry.bind(this);
        
        this.submitEntry = this.submitEntry.bind(this);
    }
    
    componentDidMount(){

        //let authors = [];
        axios.get('http://localhost:4444/authors/')
        .then(res => 
            this.setState({ authors: res.data.map(
                author => author.author)}))
        .catch(err => console.log(err))
    }

    submitEntry(event){
        
        //alert(this.state.authorButton);
        axios.post('http://localhost:4444/entries/add/', { author: this.state.authorButton, entry: this.state.entry})
        .then(function(res){console.log(res.data)});

        this.setState({
            entry: ""
        })
    }

    handleEntry(event){
        this.setState({
            entry: event.target.value
        });
    }

    handleAuthor(event){
        //alert(event.target.data);
        //console.log(event.target.value);
        this.setState({
            authorButton: event.target.value
        });
       //alert(this.state.authorButton);
       //console.log(this.state.authorButton);
    }


    render(){
       
        return(

            <div>

        <h5>Add New Diary Entry</h5>
            <br></br>

            <div>
            <form onSubmit={this.submitEntry}>
                <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">New Entry: </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={this.handleEntry}></textarea>
            </div>

            {/* <div className="btn-group">
                
                <button type="button" name="dropdownBtn" className="btn btn-primary dropdown-toggle" htmlFor="dropdownBtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onSelect={(evt,name)=>{ $("#dropdown-item").text(name)  }}>
                {this.state.authorButton}
                </button>
                <div className="dropdown-menu">

                {this.state.authors.map((author, index) => {
                    // return (<a className="dropdown-item" href="# "  key={index}>{author} </a>)
                })} */}
            {/* </div>

           */}

           <div>
            <select  className="custom-select" onChange={this.handleAuthor}  >
                <option value="author"> Pick an Author! </option>
                
                {this.state.authors.map((author, index) => {
                    return (
                    
                    <option key={index} value={String(author)}>{author}</option>)
                }) }
            </select>
            </div>
            <div className="form-group">
                <br></br>
                <button type="submit" className="btn btn-primary btn-rounded"> Submit </button>
            </div>
            </form>
            </div>
            </div>
        )
    }
}