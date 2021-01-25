import React, { Component } from "react";
// import Container from "./Container";
import Jumbotron from "./Jumbotron";
import HorizontalRule from "./HorizontalRule";
import Table from "./Table";
import API from "../utils/API";

class UserDirectory extends Component {
    state = {
        result: [],
        filteredResult: [],
        search: ''
    };

    componentDidMount() {
        this.searchUsers();
    };

    searchUsers = () => {
        API.search()
            .then(res => {
                this.setState({ result: res.data.results });
                this.setState({ filteredResult: res.data.results });
                console.log(this.state.result);
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {

        const { name, value } = event.target;

        this.setState({
            [name]: value
        });

        let filtered = this.state.result.filter(obj => {
            if (obj.name.first.toLowerCase().includes(value.toLowerCase()) || obj.name.last.toLowerCase().includes(value.toLowerCase())) {
                return obj;
            }
        })

        // console.log('result: ', this.state.result);

        // console.log('filtered: ', filtered)

        this.setState({ filteredResult: filtered });

        // console.log('search: ', this.state.search);
    };


    render() {
        return (
            <div>
                <Jumbotron />
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Search</span>
                    <input value={this.state.search} type="text" className="form-control" name='search' onChange={this.handleInputChange} />
                </div>
                <HorizontalRule />
                <Table filteredResults={this.state.filteredResult} />
            </div>   
        );
    }
}

export default UserDirectory;