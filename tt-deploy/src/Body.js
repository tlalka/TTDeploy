import React from 'react';
import Tweet from './Tweet';
import OurModal from './OurModal';
import axios from "axios";

class Body extends React.Component {
    constructor(props){
        super(props);
        
        this.handleaddbox = this.handleaddbox.bind(this);
        this.handleremovebox = this.handleremovebox.bind(this);
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTweetChange = this.handleTweetChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleCancel =       this.handleCancel.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        const boxnum = {index: 0};
        const boxes = [];
        boxes.push(boxnum);
        this.state = {boxes,
                      Bsplitting: false,
                      splitting: "off",
                      showModal: false};        
    }
    
    handleSubmit(){
        let numTweets = this.state.boxes.length;
        let tweets = [];
        for(let i = 0; i < numTweets; i++) {
            tweets.push({
                "STATUS": this.state[i],
                "MEDIA": []
            })
        }
        let thread = {"TWEETS" : tweets};
        console.log(JSON.stringify(thread));
        axios.post("https://api.threadedtweeter.com/v2/post-thread", {data: JSON.stringify(thread), withCredentials: true})
        .then(response => {
            console.log(response);
            console.log(response.data);
        },
        error => {
            console.log(error);
        })
    }

    handleaddbox(){
        const newBoxes = this.state.boxes;
        newBoxes.push({index: newBoxes.length});
        this.setState({boxes : newBoxes});
        console.log("handleaddbox " + this.state.boxes.length);
    }
    
    handleOpenModal () {
        this.setState({ showModal: true });
        console.log("Open Modal");
    }

    handleCloseModal () {
        this.setState({ showModal: false });
        console.log("Close Modal");
    }
    
    handleremovebox(){
        const newBoxes = this.state.boxes;
        newBoxes.splice((newBoxes.length-1),1);
        this.setState({boxes : newBoxes});
        console.log("handleremovebox " + this.state.boxes.length);
    }
    
    handleCancel () {
        this.setState({ Bsplitting: false, splitting:"off" });   
        console.log("cancel: set splitting state " + this.state.splitting);
        console.log("cancel: set Bsplitting state " + this.state.Bsplitting);
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
            console.log("set splitting state off");
        }
        else{
            this.setState({splitting: "on"});
            console.log("set splitting state on");
        }
    }

    handleTweetChange(tweetId, value) {
        this.setState({[tweetId]: value});
    }

    render() {
        const Tweets = this.state.boxes.map(box => (
            <Tweet 
                key={box.index}
                id={box.index}
                onChange={this.handleTweetChange}
                value={this.state[box]}    
            />
        ));

        const boxes = this.state.boxes;
        const boxnum = boxes.length;
        let button;
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

        return (
            <div className = "main-body">
            <div className = "sub-body">

            
            <OurModal showModal={this.state.showModal}  Bsplitting={this.state.Bsplitting}  splitting={this.state.splitting}  handleInputChange = {this.handleInputChange} handleCancel = {this.handleCancel} handleOpenModal = {this.handleOpenModal} handleCloseModal = {this.handleCloseModal}/>
            
            {Tweets}             
            {button}
            {sendtweet}

            </div>
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