import React, { Component } from 'react';
import Login from './Login';
import { Route, Switch } from 'react-router-dom';


class Splash extends Component {
    constructor(props){
    super(props);}
    render() {
        return (
            <div className = "splash-footer">
                <div className = "splash-header">

                    <div className = "splash-1">Threaded Tweeter</div>
                    </div>
                    <div className = "splash-body">
                    <div className = "splash-2">    
                        <button type="link" onClick = {this.props.handleContact}> contact us </button>
                    </div>
                    <div className = "splash-3">    
                    <Route path="/" component={Login} />
                    </div>
                    <div className = "splash-4" >    
                        <button type="link" onClick = {this.props.handleHelp}> help </button>
                    </div>

                </div>
            <div className = "splash-subfooter">
            <div className = "splash-5">
            An innovative tool for quick and easy threaded tweets
            </div>
            <img width = "100px"
            src={require('./logo2.JPG')}
            alt='logo2' />
                <div className = "splash-5">
            Tweet Together
            lot of othe words that I havent figured out yet lot of othe words that I havent figured out yet lot of othe words that I havent figured out yet lot of othe words that I havent figured out yet lot of othe words that I havent figured out yet lot of othe words that I havent figured out yet lot of othe words that I havent figured out yet 
            </div> 
</div>
</div>

        );
    }
}

export default Splash;