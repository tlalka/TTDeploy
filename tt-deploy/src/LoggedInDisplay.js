import React, { Component } from 'react';
import axios from 'axios';
import * as Paths from './SourcePath';

class LoggedInDisplay extends Component {
    constructor () {
        super()
        this.state = {
            username: ""
        }
    }

    componentDidMount() {
        axios.get(Paths.ourPath + "/login/status", {withCredentials: true}).then(
            response => {
                if (response.data.loginStatus){
                    this.setState({
                        loginStatus: response.data.Status,
                        username: response.data.username
                    })
                } else {
                    this.setState({
                        loginStatus: response.data.Status
                    })
                }
            }
        );
    }

    render() {
        return (
            <div className="loged_in_display">
                {this.state.loginStatus ? "Not logged in" : "Logged in as: " + this.state.username}
            </div>
        )
    }
}

export default LoggedInDisplay;
