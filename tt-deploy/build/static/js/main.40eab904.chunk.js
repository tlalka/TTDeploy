(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{199:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(44),l=a.n(s),i=(a(86),a(2)),r=a(3),c=a(5),h=a(4),d=a(6),u=a(1),p=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).call(this))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e,t=this.props.isLoggedIn;return console.log("usr: "+this.props.username+",  Scookie: "+this.props.resourceOwnerSecretCookie+", Kcookie: "+this.props.resourceOwnerKeyCookie+", Url: "+this.props.loginUrl+", isLoggedIn: "+this.props.isLoggedIn),e=t?o.a.createElement(o.a.Fragment,null," ",o.a.createElement("span",null," Hello ",this.props.username," ")," ",o.a.createElement("a",{className:"button",onClick:this.props.logout},"Logout")," "):this.props.loginUrl?o.a.createElement("a",{className:"button",href:this.props.loginUrl},"Login with Twitter"):"Loading...",o.a.createElement("div",{className:"login_component"},e)}}]),t}(n.Component),m=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return console.log(this.props.username+", "+this.props.resourceOwnerSecretCookie+", "+this.props.resourceOwnerKeyCookie+", "+this.props.loginUrl+", "+this.props.isLoggedIn),o.a.createElement("div",{className:"main-header"},o.a.createElement("div",{className:"sub-header1"},o.a.createElement("div",{className:"h-1"},o.a.createElement("div",null,"Tweet"),o.a.createElement("div",null,"Together")),o.a.createElement("div",{className:"h-2"},o.a.createElement("img",{width:"70px",src:a(88),alt:"logo"})),o.a.createElement("div",{className:"h-3",onClick:this.props.handleHome},"Threaded Tweeter")),o.a.createElement("div",{className:"sub-header2"},o.a.createElement("div",{className:"h-4"},o.a.createElement(p,{checkLoginStatus:this.props.checkLoginStatus,componentDidMount:this.props.componentDidMount,logout:this.props.logout,loginUrl:this.props.loginUrl,resourceOwnerKeyCookie:this.props.resourceOwnerKeyCookie,resourceOwnerSecretCookie:this.props.resourceOwnerSecretCookie,username:this.props.username,isLoggedIn:this.props.isLoggedIn}))))}}]),t}(n.Component),b=a(11),g=a(13),f=a.n(g),v=function(e){function t(e){var a;Object(i.a)(this,t);var n="";return n=void 0===(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).props.value?"":a.props.value,a.state={value:n,file:""},a.handleChange=a.handleChange.bind(Object(u.a)(Object(u.a)(a))),a.fileHandler=a.fileHandler.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({value:t}),this.props.onChange("tweet"+this.props.id,t)}},{key:"fileHandler",value:function(e){var t=this;this.setState({file:e.target.files[0]});var a=e.target.files[0];console.log(a);var n=this.props.uploadData;n=Object.assign({file:e.target.files[0]},n),console.log(n),f.a.post(this.props.uploadUrl,n).then(function(e){console.log(e),t.props.onUpload("media"+t.props.id,e.data.location)})}},{key:"render",value:function(){var e;return console.log(this.state.value),e=this.state.value.length<=280?o.a.createElement("div",{className:"b-5"},this.state.value.length,"/280"):o.a.createElement("div",{className:"b-5-red"},this.state.value.length,"/280"),o.a.createElement("div",null,o.a.createElement("textarea",{type:"text2",id:"tweet",name:"tweet",onChange:this.handleChange,value:this.state.value}),o.a.createElement("div",{className:"sub-body2"},o.a.createElement("div",{className:"b-4"},o.a.createElement("input",{type:"file",onChange:this.fileHandler})),e))}}]),t}(o.a.Component),w=a(77),O=a.n(w),y={content:{top:"30%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0px"}},E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={Bsplitting:e.Bsplitting,splitting:e.splitting,showModal:e.showModal},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e;return"off"===this.props.splitting?(e=o.a.createElement("div",{className:"b-1"},"Auto splitting: off"),console.log("splitting displays off")):(e=o.a.createElement("div",{className:"b-1"},"Auto splitting: on"),console.log("splitting displays on")),o.a.createElement("div",{className:"sub-body1"},e,o.a.createElement("div",{className:"b-2"},o.a.createElement("button",{type:"button",className:"notbutton",onClick:this.props.handleOpenModal},"Splitting options"),o.a.createElement(O.a,{isOpen:this.props.showModal,style:y},o.a.createElement("div",{className:"modal-header"},o.a.createElement("div",{className:"modal-title",id:"exampleModalLabel"},"Tweet splitting allows us to formate your thread for you."),o.a.createElement("button",{onClick:this.props.handleCloseModal,type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),o.a.createElement("div",{className:"modal-body"},o.a.createElement("div",null,"Basic splitting:",o.a.createElement("input",{name:"Bsplitting",type:"checkbox",checked:this.props.Bsplitting,onChange:this.props.handleInputChange}))),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("div",{className:"b-7","data-dismiss":"modal"},o.a.createElement("button",{type:"submit2",onClick:this.props.handleCancel},"cancel")),o.a.createElement("div",{className:"b-6"},o.a.createElement("button",{type:"submit2",onClick:this.props.handleSplitting}," submit "))))))}}]),t}(o.a.Component),k=a(30),C=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.username;o.a.createElement(k.Timeline,{dataSource:{sourceType:"profile",screenName:e},options:{username:e,height:"300",width:"600"},onLoad:function(){return console.log("Timeline is loaded!")}});return o.a.createElement("div",{className:"after-tweet"},o.a.createElement("div",{className:"after-tweet-header"},o.a.createElement("div",{className:"success-1"},"Success!"),o.a.createElement("div",{className:"success-2"},"Your thread of tweets was posted successfully.")),o.a.createElement("div",{className:"after-tweet-body"}),o.a.createElement("div",{className:"after-tweet-footer"},o.a.createElement("button",{type:"link",onClick:this.props.handleHome2}," post another ")))}}]),t}(o.a.Component),j=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.username,t=o.a.createElement(k.Timeline,{dataSource:{sourceType:"profile",screenName:e},options:{username:e,height:"300",width:"600"},onLoad:function(){return console.log("Timeline is loaded!")}});return o.a.createElement("div",{className:"after-tweet"},o.a.createElement("div",{className:"after-tweet-header"},o.a.createElement("div",{className:"fail-1"},"Uh-oh!"),o.a.createElement("div",{className:"fail-2"},"Your thread failed to post, we tried to delete the incomplete thread, but one or more tweets may still be on your feed. Please check your feed for unfinished threads.")),o.a.createElement("div",{className:"after-tweet-body"},this.props.response,t),o.a.createElement("div",{className:"after-tweet-footer"},o.a.createElement("button",{type:"link",onClick:this.props.handleHome2}," post another ")),o.a.createElement("button",{type:"button",className:"notbutton",onClick:this.props.handleHelp},"what happened?"))}}]),t}(o.a.Component),N=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleaddbox=a.handleaddbox.bind(Object(u.a)(Object(u.a)(a))),a.handleremovebox=a.handleremovebox.bind(Object(u.a)(Object(u.a)(a))),a.handleInputChange=a.handleInputChange.bind(Object(u.a)(Object(u.a)(a))),a.handleTweetChange=a.handleTweetChange.bind(Object(u.a)(Object(u.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(Object(u.a)(a))),a.handleHome2=a.handleHome2.bind(Object(u.a)(Object(u.a)(a))),a.handleCancel=a.handleCancel.bind(Object(u.a)(Object(u.a)(a))),a.handleSplitting=a.handleSplitting.bind(Object(u.a)(Object(u.a)(a))),a.handleOpenModal=a.handleOpenModal.bind(Object(u.a)(Object(u.a)(a))),a.handleCloseModal=a.handleCloseModal.bind(Object(u.a)(Object(u.a)(a))),a.handleFileUpload=a.handleFileUpload.bind(Object(u.a)(Object(u.a)(a)));var n=[];return n.push({index:0}),a.state={boxes:n,Bsplitting:!1,splitting:"off",tweetsent:"no",showModal:!1,response:"",uploadUrl:"",uploadData:{}},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://api.threadedtweeter.com/v2/upload").then(function(t){e.setState({uploadUrl:t.data.url,uploadData:t.data.fields})})}},{key:"handleSubmit",value:function(){for(var e=this.state.boxes.length,t=[],a=0;a<e;a++)t.push({STATUS:"tweet"+a in this.state?this.state["tweet"+a]:"",MEDIA:"media"+a in this.state?[this.state["media"+a]]:[]});var n={TWEETS:t};console.log(JSON.stringify(n));var o=new XMLHttpRequest;o.open("POST","https://api.threadedtweeter.com/v2/post-thread",!1),o.withCredentials=!0,o.send(JSON.stringify(n));var s=o.response;console.log(s);var l=JSON.parse(s);console.log(l),console.log(l.errorMessage),console.log(s.body),void 0!==l.errorMessage?this.setState({tweetsent:"fail",response:l.errorMessage}):this.setState({tweetsent:"success",response:l.body})}},{key:"handleHome2",value:function(){this.setState({tweetsent:"no",response:""})}},{key:"handleaddbox",value:function(){var e=this.state.boxes;e.push({index:e.length}),this.setState({boxes:e}),console.log("handleaddbox "+this.state.boxes.length)}},{key:"handleOpenModal",value:function(){this.setState({showModal:!0}),console.log("Open Modal")}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1}),console.log("Close Modal")}},{key:"handleremovebox",value:function(){var e=this.state.boxes;this.setState(Object(b.a)({},this.state.boxes.length-1,"")),e.splice(e.length-1,1),this.setState({boxes:e}),console.log("handleremovebox "+this.state.boxes.length)}},{key:"handleSplitting",value:function(){console.log("Splitting???");for(var e="",t=0;t<this.state.boxes.length;t++)e+=this.state["tweet"+t]+" ";for(;this.state.boxes.length>0;)this.handleremovebox();var a=this.state.boxes;a.push({index:a.length}),this.setState({boxes:a});var n=function(e){return function(t){return[t.slice(0,e),t.slice(e+1)]}};if(0===e.length)this.setState(Object(b.a)({},"tweet0",""));else if(e.length>280){for(var o=279,s=[];" "!=e[o];)o--;var l=n(o)(e);for(this.setState(Object(b.a)({},"tweet0",l[0]));l[1].length>280;){for(o=279;" "!=l[1][o];)o--;l=n(o)(l[1]),s.push(l[0])}s.push(l[1]);for(var i=0;i<s.length;i++)this.handleaddbox(),this.setState(Object(b.a)({},"tweet"+i+1,s[i]))}else this.setState(Object(b.a)({},"tweet0",e));this.setState({showModal:!1})}},{key:"handleCancel",value:function(){this.setState({Bsplitting:!1,splitting:"off"}),console.log("cancel: set splitting state "+this.state.splitting),console.log("cancel: set Bsplitting state "+this.state.Bsplitting),this.setState({showModal:!1})}},{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(b.a)({},n,a)),!0===this.state.Bsplitting?(this.setState({splitting:"off"}),console.log("set splitting state off")):(this.setState({splitting:"on"}),console.log("set splitting state on"))}},{key:"handleTweetChange",value:function(e,t){this.setState(Object(b.a)({},e,t))}},{key:"handleFileUpload",value:function(e,t){this.setState(Object(b.a)({},e,t))}},{key:"render",value:function(){var e=this;console.log(this.state.tweetsent);var t,a,n=this.state.boxes.map(function(t){return o.a.createElement(v,{key:t.index,id:t.index,onChange:e.handleTweetChange,value:e.state["tweet"+t.index],uploadUrl:e.state.uploadUrl,uploadData:e.state.uploadData,onUpload:e.handleFileUpload})});t=1===this.state.boxes.length?o.a.createElement("div",{className:"centeronebutton"},o.a.createElement("button",{className:"circlebutton",onClick:this.handleaddbox},"+")):o.a.createElement("div",{className:"centeronebutton"},o.a.createElement("button",{className:"circlebutton",onClick:this.handleremovebox},"-"),o.a.createElement("button",{className:"circlebutton",onClick:this.handleaddbox},"+"));var s=o.a.createElement("div",{className:"b-3"},o.a.createElement("button",{type:"submit2",onClick:this.handleSubmit},"submit"));return a="success"===this.state.tweetsent?o.a.createElement(C,{handleHome2:this.handleHome2,response:this.state.response,username:this.props.username}):"fail"===this.state.tweetsent?o.a.createElement(j,{handleHome2:this.handleHome2,handleHelp:this.props.handleHelp,response:this.state.response,username:this.props.username}):this.state.showModal?o.a.createElement("div",{className:"main-body"},o.a.createElement("div",{className:"sub-body"},o.a.createElement(E,{showModal:this.state.showModal,Bsplitting:this.state.Bsplitting,splitting:this.state.splitting,handleInputChange:this.handleInputChange,handleCancel:this.handleCancel,handleOpenModal:this.handleOpenModal,handleSplitting:this.handleSplitting,handleCloseModal:this.handleCloseModal}),t,s)):o.a.createElement("div",{className:"main-body"},o.a.createElement("div",{className:"sub-body"},o.a.createElement(E,{showModal:this.state.showModal,Bsplitting:this.state.Bsplitting,splitting:this.state.splitting,handleInputChange:this.handleInputChange,handleCancel:this.handleCancel,handleOpenModal:this.handleOpenModal,handleSplitting:this.handleSplitting,handleCloseModal:this.handleCloseModal}),n,t,s)),o.a.createElement("div",null,a)}}]),t}(o.a.Component),S=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"main-footer"},o.a.createElement("div",{className:"h-1"},o.a.createElement("button",{type:"link",onClick:this.props.handleHelp}," help ")),o.a.createElement("div",{className:"h-2"},o.a.createElement("img",{width:"55px",src:a(76),alt:"logo2"})),o.a.createElement("div",{className:"h-5"},o.a.createElement("button",{type:"link",onClick:this.props.handleContact}," contact us ")))}}]),t}(n.Component),x=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return console.log(this.props.username+", "+this.props.resourceOwnerSecretCookie+", "+this.props.resourceOwnerKeyCookie+", "+this.props.loginUrl+", "+this.props.isLoggedIn),o.a.createElement("div",{className:"splash-footer"},o.a.createElement("div",{className:"splash-header"},o.a.createElement("div",{className:"splash-1"},"Threaded Tweeter")),o.a.createElement("div",{className:"splash-body"},o.a.createElement("div",{className:"splash-2"},o.a.createElement("button",{type:"link",onClick:this.props.handleContact}," contact us ")),o.a.createElement("div",{className:"splash-3"},o.a.createElement(p,{checkLoginStatus:this.props.checkLoginStatus,componentDidMount:this.props.componentDidMount,logout:this.props.logout,loginUrl:this.props.loginUrl,resourceOwnerKeyCookie:this.props.resourceOwnerKeyCookie,resourceOwnerSecretCookie:this.props.resourceOwnerSecretCookie,username:this.props.username,isLoggedIn:this.props.isLoggedIn})),o.a.createElement("div",{className:"splash-4"},o.a.createElement("button",{type:"link",onClick:this.props.handleHelp}," help "))),o.a.createElement("div",{className:"splash-subfooter"},o.a.createElement("div",{className:"splash-5"},"An innovative tool for quick and easy threaded tweets"),o.a.createElement("img",{width:"100px",src:a(76),alt:"logo2"}),o.a.createElement("div",{className:"splash-5"},"Lots and lots of other important words could go here, lots and lots and lots and lots and lots and lots and lots and lots and lots and lots and lots and lots and lots and lots and lots and lots and lots and lots and lots and lots and lots and lots and lots and lots and lots and lots")))}}]),t}(n.Component),M=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"help"},o.a.createElement("div",{className:"help-header"},"Contact us"),o.a.createElement("div",{className:"help-body"},'We are creating a tool called "Threaded Tweeter" which will serve as a tool for computer power users to quickly and easily compose and post threaded tweets. The core product will be a command line tool that allows a user to compose a tweet thread in their preferred text editor, and post to twitter from the comfort of their terminal emulator.',o.a.createElement("div",{className:"help-subheader"},"https://github.com/peakay/ThreadedTweeter"),o.a.createElement("div",{className:"help-subheader"})))}}]),t}(n.Component),T=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"help"},o.a.createElement("div",{className:"help-header"},"Help"),o.a.createElement("div",{className:"help-body"},o.a.createElement("div",{className:"help-subheader"},"General information:"),"Threaded Tweeter is a web application that can help you make threaded tweets on twitter. You have full control of what content goes in each tweet, including pictures, but we can format you tweets for you as well.",o.a.createElement("div",{className:"help-subheader"},"How to create a thread:"),"Users must first login with twitter and authorize our app to post tweets on their page. Threaded tweeter will only post threads you create, and delete unfinished threads if there was a fatal error. Type or paste your tweet into the textbox. Use the \u201c+\u201d button to add a new tweet to your thread. Tweets appear on the page in order, first to last. Click the \u201c-\u201d button to remove a tweet from your thread. You can attach a picture to any tweet by clicking the \u201cAdd picture\u201d button or dragging a picture onto the tweet from your desktop. Tweets are constrained by Twitter\u2019s 280 character count. Threaded Tweeter shows an indicator of your current character count for each tweet at the bottom right of the textbox. Our app can automatically split and format your tweets for you. Click \u201csplitting options\u201d above the text box to access these. Click \u201csend\u201d to publish your tweet. After publishing a tweet, you should see a \u201cSuccess\u201d message and a window showing your thread.",o.a.createElement("div",{className:"help-subheader"},"Tweet splitting options:"),"Splitting can be done at the end of the next word, after punctuation such as periods, commas and semicolons, or at punctuation and emoji. We can also number the tweets in your thread for you. You can put custom text at the start and or end of each tweet. This text will not appear at the start of your first tweet or the end of your last tweet. You can use this option to put in ellipses, for example.",o.a.createElement("div",{className:"help-subheader"},"Errors:"),"If you received an error notice it may have been caused by some of these common errors: Attempting to post a tweet while not logged in. Attempting to post a tweet over the character limit. Authentication or authorization failures. Connection/Internet failures. If a failure occurs after some of the thread has already been posted, Threaded Tweeter will attempt to delete them for you. Certain errors, such as a dropped connection, may make it impossible to delete the unfinished thread. Threaded Tweeter will show you your timeline after a failure occurs, so you can check for partial threads and delete them manually.",o.a.createElement("div",{className:"help-subheader"})))}}]),t}(n.Component),L=new(a(80).a),H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={isLoggedIn:!1,help:!1,contact:!1,loginUrl:"",resourceOwnerKeyCookie:"",resourceOwnerSecretCookie:"",username:null},a.handleHelp=a.handleHelp.bind(Object(u.a)(Object(u.a)(a))),a.handleContact=a.handleContact.bind(Object(u.a)(Object(u.a)(a))),a.handleHome=a.handleHome.bind(Object(u.a)(Object(u.a)(a))),a.logout=a.logout.bind(Object(u.a)(Object(u.a)(a))),a.checkLoginStatus=a.checkLoginStatus.bind(Object(u.a)(Object(u.a)(a))),a.componentDidMount=a.componentDidMount.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleHelp",value:function(){this.setState({help:!0,contact:!1}),console.log("help")}},{key:"handleContact",value:function(){this.setState({help:!1,contact:!0}),console.log("contact us")}},{key:"handleHome",value:function(){this.setState({help:!1,contact:!1})}},{key:"logout",value:function(){console.log("logging out"),L.remove("access_token_key",{path:"/",domain:".threadedtweeter.com"}),L.remove("access_token_secret",{path:"/",domain:".threadedtweeter.com"}),window.location.reload()}},{key:"checkLoginStatus",value:function(){var e=this,t=Object.assign({},this.state);return f.a.get("https://api.threadedtweeter.com/v2/login/status",{withCredentials:!0}).then(function(a){t.isLoggedIn=a.data.Status,t.username=a.data.username,e.setState(t)},function(a){t.isLoggedIn=!1,e.setState(t)})}},{key:"componentDidMount",value:function(){var e=this;this.checkLoginStatus().then(function(t){e.state.isLoggedIn||(console.log("not logged in part 2"),f.a.get("https://api.threadedtweeter.com/v2/login?mode=webapp").then(function(t){e.setState({loginUrl:t.data.url,resourceOwnerKeyCookie:t.data.cookie_1,resourceOwnerSecretCookie:t.data.cookie_2,isLoggedIn:!1,username:null});var a=e.state.resourceOwnerKeyCookie.split(";")[0].split("=")[1],n=e.state.resourceOwnerSecretCookie.split(";")[0].split("=")[1];L.set("resource_owner_key",a,{path:"/",expires:new Date("2020-1-1"),domain:".threadedtweeter.com"}),L.set("resource_owner_secret",n,{path:"/",expires:new Date("2020-1-1"),domain:".threadedtweeter.com"})}))})}},{key:"render",value:function(){var e;console.log(this.state.username+", "+this.state.resourceOwnerSecretCookie+", "+this.state.resourceOwnerKeyCookie+", "+this.state.loginUrl+", "+this.state.isLoggedIn);var t=o.a.createElement(m,{handleHome:this.handleHome,checkLoginStatus:this.checkLoginStatus,componentDidMount:this.componentDidMount,logout:this.logout,loginUrl:this.state.loginUrl,resourceOwnerKeyCookie:this.state.resourceOwnerKeyCookie,resourceOwnerSecretCookie:this.state.resourceOwnerSecretCookie,username:this.state.username,isLoggedIn:this.state.isLoggedIn}),a=o.a.createElement(S,{handleHelp:this.handleHelp,handleContact:this.handleContact});return e=!0===this.state.help?o.a.createElement("div",{className:"bodystyle"},t,o.a.createElement(T,null),a):!0===this.state.contact?o.a.createElement("div",{className:"bodystyle"},t,o.a.createElement(M,null),a):!0===this.state.isLoggedIn?o.a.createElement("div",{className:"bodystyle"},t,o.a.createElement(N,{handleHome:this.handleHome,handleHelp:this.handleHelp,username:this.state.username}),a):o.a.createElement(x,{handleHelp:this.handleHelp,handleContact:this.handleContact,checkLoginStatus:this.checkLoginStatus,componentDidMount:this.componentDidMount,logout:this.logout,loginUrl:this.state.loginUrl,resourceOwnerKeyCookie:this.state.resourceOwnerKeyCookie,resourceOwnerSecretCookie:this.state.resourceOwnerSecretCookie,username:this.state.username,isLoggedIn:this.state.isLoggedIn}),o.a.createElement("div",null,e)}}]),t}(n.Component),I=(a(199),a(202)),U=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(I.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(H,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},76:function(e,t,a){e.exports=a.p+"static/media/logo2.6ed5019e.JPG"},81:function(e,t,a){e.exports=a(201)},86:function(e,t,a){},88:function(e,t,a){e.exports=a.p+"static/media/logo.56a41b55.JPG"}},[[81,2,1]]]);
//# sourceMappingURL=main.40eab904.chunk.js.map