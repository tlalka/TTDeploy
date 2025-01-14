import React from 'react';
import Tweet from './Tweet';
import OurModal from './OurModal';
import axios from "axios";
import Success from './Success';
import Fail from './Fail';
import * as Paths from './SourcePath';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Body extends React.Component {
    constructor(props){
        super(props);

        this.handleaddbox = this.handleaddbox.bind(this);
        this.handleremovebox = this.handleremovebox.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTweetChange = this.handleTweetChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleHome2 = this.handleHome2.bind(this);
        this.handleHome3 = this.handleHome3.bind(this);
        this.handleCancel =       this.handleCancel.bind(this);
        this.handleSplitting =       this.handleSplitting.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
        const boxnum = {index: 0};
        const boxes = [];
        boxes.push(boxnum);
        this.state = {boxes,
                      Bsplitting: false,
                      splitting: "off",
                      tweetsent: "no",
                      showModal: false,
                      response: "",
                      uploadUrl: "",
                      uploadData:{}};
    }

    componentDidMount() {
        axios.get(Paths.ourPath + "/upload").then(
            response => {
                this.setState({
                    uploadUrl: response.data.url,
                    uploadData: response.data.fields
                });
            }
        )
    }

    handleSubmit(){
        let numTweets = this.state.boxes.length;
        let tweets = [];
        for(let i = 0; i < numTweets; i++) {
            tweets.push({
                "STATUS": ("tweet"+i in this.state) ? this.state["tweet"+i] : "",
                "MEDIA": ("media"+i in this.state && this.state["media"+i] != '') ? [this.state["media"+i]] : []
            })
        }
        let thread = {"TWEETS" : tweets};
        //console.log(JSON.stringify(thread));
        let xhttp = new XMLHttpRequest();
        let postPath = Paths.ourPath + "/post-thread?access_token_key=" + cookies.get("access_token_key") + "&access_token_secret=" + cookies.get("access_token_secret");
        xhttp.open("POST", postPath, false);
        xhttp.withCredentials=true;
        xhttp.send(JSON.stringify(thread));
        let response = xhttp.response;
        const parsedResponse = JSON.parse(response);
        //console.log(parsedResponse);
        if (!(parsedResponse.errorMessage === undefined)){
            this.setState({tweetsent: "fail", response: parsedResponse.errorMessage});
        }
        else{
            this.setState({tweetsent: "success", response: parsedResponse.body});
        }
    }

    handleHome2(){
        this.setState({tweetsent: "no", response: ""});
        //TODO reinitalize boxes to whatever one blank box is
    }

    handleHome3(){
        this.setState({tweetsent: "no", response: ""});
        //DO NOT reinitalize boxes
    }

    handleaddbox(){
        const newBoxes = this.state.boxes;
        newBoxes.push({index: newBoxes.length});
        this.setState({boxes : newBoxes});

        //console.log("handleaddbox " + this.state.boxes.length);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
        //console.log("Open Modal");
    }

    handleCloseModal () {
        this.setState({ showModal: false });
        //console.log("Close Modal");
    }

    handleremovebox(){
        const newBoxes = this.state.boxes;
        this.setState({['tweet'+(this.state.boxes.length - 1)] : '',
                        ['media'+(this.state.boxes.length - 1)] : ''});
        newBoxes.splice((newBoxes.length-1),1);
        this.setState({boxes : newBoxes});
        //console.log("handleremovebox " + this.state.boxes.length);
    }

    handleSplitting () {
        //console.log("Splitting");

        let full_text = "";
        let chars_to_search_for = ".,;:! ?"

        for (let i = 0; i < this.state.boxes.length; i++)
        {
            full_text += this.state['tweet'+i] + " ";
        }

        //clear current boxes
        while(this.state.boxes.length > 0)
        {
            this.handleremovebox();
        }

        //console.log("done removing boxes");
        //console.log(this.state.boxes.length);

        const newBoxes = this.state.boxes;
        newBoxes.push({index: newBoxes.length});
        this.setState({boxes : newBoxes});

        //console.log(this.state.boxes.length);

        const splitAt = index => x => [x.slice(0, index), x.slice(index)];

        if (full_text.length == 0){
            this.setState({['tweet0']: ''});
          }

        else
        {
            if (full_text.length > 280)
            {
              //this is where the splitting acutally happends
                let search_index = 279; //max length of a tweet
                let text_collection = [];

                //deciding where to split
                //if there is no space within the index, simply split at the end of it
                while (! chars_to_search_for.includes(full_text[search_index])){
                    search_index--;

                    if(search_index <= 1){
                      //did not find a place to split
                      search_index = 280;
                      break;
                    }
                  }

                let split_text = splitAt(search_index)(full_text);
                this.setState({['tweet0']: split_text[0]});

                while(split_text[1].length > 280)
                {
                    search_index = 279;

                    while (! chars_to_search_for.includes(full_text[search_index])){
                        search_index--;

                        if(search_index <= 1){
                          //did not find a place to split
                          search_index = 280;
                          break;
                        }
                      }

                    split_text = splitAt(search_index)(split_text[1]);
                    text_collection.push(split_text[0]);
                }

                text_collection.push(split_text[1]);

                for (let j = 0; j < text_collection.length; j++)
                {
                    this.handleaddbox();
                    this.setState({['tweet'+(j+1)]: text_collection[j]});
                }

            }

            else
                this.setState({['tweet0']: full_text});
        }


        this.setState({ showModal: false });
        //this.setState({ re_render: true });
    }

    handleCancel () {
        this.setState({ Bsplitting: false, splitting:"off" });
        //console.log("cancel: set splitting state " + this.state.splitting);
        //console.log("cancel: set Bsplitting state " + this.state.Bsplitting);
        this.setState({ showModal: false });
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });

        if(this.state.Bsplitting === true){
            this.setState({splitting: "off"});
            //console.log("set splitting state off");
        }
        else{
            this.setState({splitting: "on"});
            //console.log("set splitting state on");
        }
    }

    handleTweetChange(tweetId, value) {
        this.setState({[tweetId]: value});

    }

    handleFileUpload(mediaId, value) {
        this.setState({[mediaId]: value})
    }

    render() {
        //console.log(this.state.tweetsent);
        const Tweets = this.state.boxes.map(box => (
            <Tweet
                key={box.index}
                id={box.index}
                onChange={this.handleTweetChange}
                value={this.state['tweet'+box.index]}
                uploadUrl={this.state.uploadUrl}
                uploadData={this.state.uploadData}
                onUpload={this.handleFileUpload}
            />
        ));

        const boxes = this.state.boxes;
        const boxnum = boxes.length;
        let button;
        let content;
        if(boxnum === 1){
            button = <div className = "centeronebutton">
                <button className = "circlebutton" onClick = {this.handleaddbox}>
                    +
                    </button>
            </div>
        } else{
            button = <div className = "centeronebutton">
                <button className = "circlebutton" onClick = {this.handleremovebox}>
                    -
                    </button>
            <button className = "circlebutton" onClick = {this.handleaddbox}>
                +
                </button>
            </div>
        }

        const sendtweet = <div className="b-3"><button type="submit2" onClick = {this.handleSubmit}>submit</button></div>;


         if(this.state.tweetsent === "success"){
                        content = <Success handleHome2= {this.handleHome2} response = {this.state.response} username = {this.props.username}/>
                }
                else if(this.state.tweetsent === "fail"){
                        content =  <Fail handleHome3= {this.handleHome3} handleHelp = {this.props.handleHelp} response = {this.state.response} username = {this.props.username}/>

                }

                else if(this.state.showModal){
                    content =
                                <div className = "sub-body">

                                <OurModal showModal={this.state.showModal}  Bsplitting={this.state.Bsplitting}  splitting={this.state.splitting}  handleInputChange = {this.handleInputChange} handleCancel = {this.handleCancel} handleOpenModal = {this.handleOpenModal} handleSplitting = {this.handleSplitting} handleCloseModal = {this.handleCloseModal}/>

                                {button}
                                {sendtweet}

                                </div>

                }

                else{
                        content =
                                    <div className = "sub-body">

                                    <OurModal showModal={this.state.showModal}  Bsplitting={this.state.Bsplitting}  splitting={this.state.splitting}  handleInputChange = {this.handleInputChange} handleCancel = {this.handleCancel} handleOpenModal = {this.handleOpenModal} handleSplitting = {this.handleSplitting} handleCloseModal = {this.handleCloseModal}/>

                                    {Tweets}
                                    {button}
                                    {sendtweet}

                                    </div>
                }


        return (
                <div className = "main-body">
                {content}
                </div>
        );
    }
}

/*const Tweets = ({boxes}) => (
    <div>
    {boxes.map( box =>(
    <Tweet
        key={box}
        id={box}
        onChange
    />))}
    </div>
)*/

export default Body;
