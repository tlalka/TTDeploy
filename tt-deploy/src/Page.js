import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Splash from './Splash';
import Contact from './Contact';
import Help from './Help';
import axios from 'axios';
import Cookies from 'universal-cookie';
import * as Paths from './SourcePath';
import {useLocation} from "react-router-dom";

const cookies = new Cookies();

class Page extends Component {
    constructor(props){
        super(props);
        this.state = {isLoggedIn: false,
                     help: false,
                     contact: false,
                     loginUrl: '',
                     resourceOwnerKeyCookie: '',
                     resourceOwnerSecretCookie: '',
                     username: null};

    this.handleHelp = this.handleHelp.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handleHome = this.handleHome.bind(this);
    this.logout = this.logout.bind(this);
    this.checkLoginStatus = this.checkLoginStatus.bind(this);
    this.checkQueries = this.checkQueries.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    }
    handleHelp(){
        this.setState({help: true, contact: false});
        //console.log("help");
    }
    handleContact(){
        this.setState({help: false, contact: true});
        //console.log("contact us");
    }
    handleHome(){
        this.setState({help: false, contact: false});
    }

    logout() {
        //console.log('logging out')
        cookies.remove('access_token_key',  { path: '/', domain : Paths.ourDomain });
        cookies.remove('access_token_secret',  { path: '/', domain : Paths.ourDomain });
        window.location.reload();
    }

    checkLoginStatus() {
        let temp = Object.assign({}, this.state);

        return axios.get(Paths.ourPath + "/login/status", {withCredentials: true}).then(
            response => {
                temp.isLoggedIn = response.data.Status;
                temp.username = response.data.username;
                this.setState(temp);
            },
            error => {
                temp.isLoggedIn = false;
                this.setState(temp);
            }
        );
    }

    checkQueries(){
        //const search = useLocation().search;
        //if the query type is loginverify
        //const queryType = new URLSearchParams(search).get('queryType');
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let querytype = params.get('querytype');

        //set login cookies to query values
        if(querytype = 'loginverify'){
          let access_token_key = params.get('access_token_key');
          let access_token_secret = params.get('access_token_secret');
          let exp = new Date();
          exp.setDate(exp.getDate()+100);
          cookies.set('access_token_key', access_token_key, {path : '/', expires : exp, domain : Paths.ourDomain});
          cookies.set('access_token_secret', access_token_secret, {path : '/', expires : exp, domain : Paths.ourDomain});
        }
        return;
    }

    componentDidMount() {
        this.checkQueries()
        this.checkLoginStatus().then(
            response => {
                if (!this.state.isLoggedIn) {
                    //We are not logged in.
                    this.setState({
                        isLoggedIn : false,
                        username : null
                    })
                }
            }
        )

    }

    render() {

        //console.log(this.state.username + ", " + this.state.resourceOwnerSecretCookie + ", " + this.state.resourceOwnerKeyCookie + ", " + this.state.loginUrl + ", " + this.state.isLoggedIn);

        let content;

        const header = <Header handleHome= {this.handleHome} checkLoginStatus = {this.checkLoginStatus} componentDidMount = {this.componentDidMount} logout = {this.logout} loginUrl = {this.state.loginUrl} resourceOwnerKeyCookie = {this.state.resourceOwnerKeyCookie} resourceOwnerSecretCookie = {this.state.resourceOwnerSecretCookie} username = {this.state.username} isLoggedIn = {this.state.isLoggedIn}/>;

        const footer = <Footer handleHelp = {this.handleHelp} handleContact = {this.handleContact} handleHome= {this.handleHome}/>;

            if(this.state.help === true){//help page
                content = <div className = "bodystyle">
            {header}
            <Help />
            {footer}
                </div>
            }
            else if(this.state.contact === true){// contact page
                content = <div className = "bodystyle">
            {header}
            <Contact />
            {footer}
                </div>
            }
            else if(this.state.isLoggedIn === true){//normal tweet page
                content =
                    <div className = "bodystyle">
                    {header}
                    <Body handleHelp= {this.handleHelp} username = {this.state.username}/>
                    {footer}
                    </div>
            }
        else{//splash
            content = <Splash handleHelp = {this.handleHelp} handleContact = {this.handleContact} checkLoginStatus = {this.checkLoginStatus} componentDidMount = {this.componentDidMount} logout = {this.logout} loginUrl = {this.state.loginUrl} resourceOwnerKeyCookie = {this.state.resourceOwnerKeyCookie} resourceOwnerSecretCookie = {this.state.resourceOwnerSecretCookie} username = {this.state.username} isLoggedIn = {this.state.isLoggedIn}/>;
        }

        return (
            <div>
            {content}
            </div>
        );
    }
}

export default Page;
