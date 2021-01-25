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

    handleSort = event => {
        console.log(event.target.name)
        switch(event.target.name) {

            case 'firstNameAscend':

                let firstAscend = this.state.filteredResult;

                firstAscend.sort((a, b) => {
                    let nameA = a.name.first.toLowerCase();
                    let nameB = b.name.first.toLowerCase();

                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                })

                this.setState({ filteredResult: firstAscend })
                break;

            case 'firstNameDescend':

                let firstDescend = this.state.filteredResult;

                firstDescend.sort((a, b) => {
                    let nameA = a.name.first.toLowerCase();
                    let nameB = b.name.first.toLowerCase();

                    if (nameA < nameB) {
                        return 1;
                    }
                    if (nameA > nameB) {
                        return -1;
                    }
                    return 0;
                })

                this.setState({ filteredResult: firstDescend })
                break;

            case 'lastNameAscend':

                let lastAscend = this.state.filteredResult;

                lastAscend.sort((a, b) => {
                    let nameA = a.name.last.toLowerCase();
                    let nameB = b.name.last.toLowerCase();

                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                })

                this.setState({ filteredResult: lastAscend })
                break;

            case 'lastNameDescend':

                let lastDescend = this.state.filteredResult;

                lastDescend.sort((a, b) => {
                    let nameA = a.name.last.toLowerCase();
                    let nameB = b.name.last.toLowerCase();

                    if (nameA < nameB) {
                        return 1;
                    }
                    if (nameA > nameB) {
                        return -1;
                    }
                    return 0;
                })

                this.setState({ filteredResult: lastDescend })
                break;

            case 'emailAscend':

                let emailAscend = this.state.filteredResult;

                emailAscend.sort((a, b) => {
                    let nameA = a.email.toLowerCase();
                    let nameB = b.email.toLowerCase();

                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                })

                this.setState({ filteredResult: emailAscend })
                break;

            case 'emailDescend':

                let emailDescend = this.state.filteredResult;

                emailDescend.sort((a, b) => {
                    let nameA = a.email.toLowerCase();
                    let nameB = b.email.toLowerCase();

                    if (nameA < nameB) {
                        return 1;
                    }
                    if (nameA > nameB) {
                        return -1;
                    }
                    return 0;
                })

                this.setState({ filteredResult: emailDescend })
                break;
            
            case 'dobAscend':
                
                let dobAscend = this.state.filteredResult;

                dobAscend.sort((a, b) => {
                    let dobA = a.dob.date.slice(0,10);
                    

                    let dobB = b.dob.date.slice(0,10);
                    

                    if (dobA < dobB) {
                        return -1;
                    }
                    if (dobA > dobB) {
                        return 1;
                    }
                    return 0;
                })

                this.setState({ filteredResult: dobAscend })
                break;

            case 'dobDescend':
                
                let dobDescend = this.state.filteredResult;

                dobDescend.sort((a, b) => {
                    let dobA = a.dob.date.slice(0,10);
                    

                    let dobB = b.dob.date.slice(0,10);
                    

                    if (dobA < dobB) {
                        return 1;
                    }
                    if (dobA > dobB) {
                        return -1;
                    }
                    return 0;
                })

                this.setState({ filteredResult: dobDescend })
                break;

        }
    }


    render() {
        return (
            <div>
                <Jumbotron />
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Search</span>
                    <input value={this.state.search} type="text" className="form-control" name='search' onChange={this.handleInputChange} />
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">SORT</button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a onClick={this.handleSort} name="firstNameAscend" class="dropdown-item" href="#">First Name (a-z)</a></li>
                        <li><a onClick={this.handleSort} name="firstNameDescend" class="dropdown-item" href="#">First Name (z-a)</a></li>
                        <li><a onClick={this.handleSort} name="lastNameAscend" class="dropdown-item" href="#">Last Name (a-z)</a></li>
                        <li><a onClick={this.handleSort} name="lastNameDescend" class="dropdown-item" href="#">Last Name (z-a)</a></li>
                        <li><a onClick={this.handleSort} name="emailAscend" class="dropdown-item" href="#">Email (a-z)</a></li>
                        <li><a onClick={this.handleSort} name="emailDescend" class="dropdown-item" href="#">Email (z-a)</a></li>
                        <li><a onClick={this.handleSort} name="dobAscend" class="dropdown-item" href="#">DOB (Ascending)</a></li>
                        <li><a onClick={this.handleSort} name="dobDescend" class="dropdown-item" href="#">DOB (Descending)</a></li>
                    </ul>
                </div>
                <HorizontalRule />
                <Table filteredResults={this.state.filteredResult} />
            </div>   
        );
    }
}

export default UserDirectory;