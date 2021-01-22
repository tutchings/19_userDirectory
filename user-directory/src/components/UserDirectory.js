import React, { Component } from "react";
// import Container from "./Container";
import Jumbotron from "./Jumbotron";
import HorizontalRule from "./HorizontalRule";
import Table from "./Table";
import API from "../utils/API";

class UserDirectory extends Component {
    state = {
        result: [],
        search: ''
    };

    componentDidMount() {
        this.searchUsers();
    };

    searchUsers = () => {
        API.search()
            .then(res => {
                this.setState({ result: res.data.results });
                console.log(this.state.result);
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div>
                <Jumbotron />
                <HorizontalRule />
                <Table results={this.state.result} />
            </div>   
        );
    }
}

export default UserDirectory;