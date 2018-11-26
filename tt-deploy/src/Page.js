import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Splash from './Splash';
import Contact from './Contact';
import Help from './Help';
import Success from './Success';
import Fail from './Fail';

class Page extends Component {
    constructor(props){
        super(props);
        this.state = {loggedin: true,
                     help: false,
                     contact: false,
                     tweetsent: "no"}; 
    this.handleHelp = this.handleHelp.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handleHome = this.handleHome.bind(this);
    }
    handleHelp(){
        this.setState({help: true, contact: false});
        console.log("help");
    }
    handleContact(){
        this.setState({help: false, contact: true});
        console.log("contact us");
    }
    handleHome(){
        this.setState({help: false, contact: false, tweetsent: "no"});
    }
        
    render() {
        let content;
            if(this.state.help === true){//help page
                content = <div className = "bodystyle">
            <Header handleHome= {this.handleHome}/>
            <Help />
            <Footer handleHelp = {this.handleHelp} handleContact = {this.handleContact}/>
            </div>
            }
            else if(this.state.contact === true){// contact page
                content = <div className = "bodystyle">
            <Header handleHome= {this.handleHome}/>
            <Contact />
            <Footer handleHelp = {this.handleHelp} handleContact = {this.handleContact}/>
            </div>
            }
            else if(this.state.loggedin === true){//normal tweet page

                if(this.state.tweetsent === "success"){
                        content = 
                    <div className = "bodystyle">
                    <Header handleHome= {this.handleHome}/>
                    <Success handleHome= {this.handleHome}/>
                    <Footer handleHelp = {this.handleHelp} handleContact = {this.handleContact}/>
                    </div>
                }
                else if(this.state.tweetsent === "fail"){
                        content = 
                    <div className = "bodystyle">
                    <Header handleHome= {this.handleHome}/>
                    <Fail handleHome= {this.handleHome }handleHelp = {this.handleHelp}/>
                    <Footer handleHelp = {this.handleHelp} handleContact = {this.handleContact}/>
                    </div>
                }
                else{
                                            content = 
                    <div className = "bodystyle">
                    <Header handleHome= {this.handleHome}/>
                    <Body />
                    <Footer handleHelp = {this.handleHelp} handleContact = {this.handleContact}/>
                    </div>
                }
            }
        else{//splash
            content = <Splash handleHelp = {this.handleHelp} handleContact = {this.handleContact}/>;
        }
        
        return (
            <div>
            {content}
            </div>
        );
    }
}

export default Page;