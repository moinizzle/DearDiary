import React, { Component } from 'react';
import axios from 'axios';

export default class CreateAuthor extends Component{

    constructor(props){
        super(props);

        // state vars
        this.state = {author: ''};
        this.changeAuthor = this.changeAuthor.bind(this);
        this.submitAuthor = this.submitAuthor.bind(this);
    }

        changeAuthor(event){
            this.setState({
                author: event.target.value
                }
            );
        }

        submitAuthor(event){
            //event.preventDefault();
            //console.log(this.state.author);
            

            axios.post("authors/add", { author: this.state.author })
            .then(function(res){console.log(res.data)});

        this.setState({
            author: ""
        })
    }

    render(){
        return(
        <div>
            <h5>Add New Author</h5>
            <br></br>
            <form onSubmit={this.submitAuthor}>
                <div class="form-group">
                    <label htmlFor="inputAuthor">New Author: </label>
                    <input type="text" required name="author" className="form-control" id="inputAuthor" placeholder="Author" onChange={this.changeAuthor} >
                    </input>
                </div>
                <div className="form-group">
                <button type="submit" class="btn btn-primary btn-rounded">Submit</button>
                </div>
            </form>
        </div>
        )
    
}

}