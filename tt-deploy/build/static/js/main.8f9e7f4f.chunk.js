(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{199:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(44),i=a.n(o),l=(a(86),a(2)),r=a(3),c=a(5),h=a(4),d=a(6),u=a(1),p="https://0n0zjltdyi.execute-api.us-east-1.amazonaws.com/dev/v2",m="threaded-tweeter-site.s3.us-east-2.amazonaws.com",b=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(h.a)(t).call(this))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e,t=this.props.isLoggedIn;return console.log("usr: "+this.props.username+",  Scookie: "+this.props.resourceOwnerSecretCookie+", Kcookie: "+this.props.resourceOwnerKeyCookie+", Url: "+this.props.loginUrl+", isLoggedIn: "+this.props.isLoggedIn),e=t?s.a.createElement(s.a.Fragment,null," ",s.a.createElement("span",null," Hello ",this.props.username," ")," ",s.a.createElement("a",{className:"button",onClick:this.props.logout},"Logout")," "):s.a.createElement("a",{className:"button",onClick:function(e){return window.location.href=p+"/login?mode=webapp"}},"Login with Twitter"),s.a.createElement("div",{className:"login_component"},e)}}]),t}(n.Component),g=function(e){function t(e){return Object(l.a)(this,t),Object(c.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"main-header"},s.a.createElement("div",{className:"sub-header1"},s.a.createElement("div",{className:"h-1",onClick:this.props.handleHome},s.a.createElement("div",null,"Tweet"),s.a.createElement("div",null,"Together")),s.a.createElement("div",{className:"h-2",onClick:this.props.handleHome},s.a.createElement("img",{width:"70px",src:a(88),alt:"logo"})),s.a.createElement("div",{className:"h-3",onClick:this.props.handleHome},"Threaded Tweeter")),s.a.createElement("div",{className:"sub-header2"},s.a.createElement("div",{className:"h-4"},s.a.createElement(b,{checkLoginStatus:this.props.checkLoginStatus,componentDidMount:this.props.componentDidMount,logout:this.props.logout,loginUrl:this.props.loginUrl,resourceOwnerKeyCookie:this.props.resourceOwnerKeyCookie,resourceOwnerSecretCookie:this.props.resourceOwnerSecretCookie,username:this.props.username,isLoggedIn:this.props.isLoggedIn}))))}}]),t}(n.Component),f=a(11),v=a(17),w=a.n(v),O=function(e){function t(e){var a;Object(l.a)(this,t);var n="";return n=void 0===(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).props.value?"":a.props.value,a.state={value:n,file:""},a.handleChange=a.handleChange.bind(Object(u.a)(Object(u.a)(a))),a.fileHandler=a.fileHandler.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({value:t}),this.props.onChange("tweet"+this.props.id,t)}},{key:"fileHandler",value:function(e){var t=this;this.setState({file:e.target.files[0]});var a=e.target.files[0];console.log(a);var n=this.props.uploadData;console.log(n);var s=new FormData;for(var o in n)s.append(o,n[o]);s.append("file",e.target.files[0]);console.log(s),w.a.post(this.props.uploadUrl,s).then(function(e){console.log(e),t.props.onUpload("media"+t.props.id,t.props.uploadUrl+n.key.slice(0,-11)+a.name)},function(e){console.log(e)})}},{key:"render",value:function(){var e;return e=this.state.value.length<=280?s.a.createElement("div",{className:"b-5"},this.state.value.length,"/280"):s.a.createElement("div",{className:"b-5-red"},this.state.value.length,"/280"),s.a.createElement("div",null,s.a.createElement("textarea",{type:"text2",id:"tweet",name:"tweet",onChange:this.handleChange,value:this.state.value}),s.a.createElement("div",{className:"sub-body2"},s.a.createElement("div",{className:"b-4"},s.a.createElement("input",{type:"file",onChange:this.fileHandler})),e))}}]),t}(s.a.Component),y=a(77),E=a.n(y),k={content:{top:"30%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0px"}},j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={Bsplitting:e.Bsplitting,splitting:e.splitting,showModal:e.showModal},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e,t=this;return e="off"===this.props.splitting?s.a.createElement("div",{className:"b-1"},"Auto splitting: off"):s.a.createElement("div",{className:"b-1"},"Auto splitting: on"),s.a.createElement("div",{className:"sub-body1"},e,s.a.createElement("div",{className:"b-2"},s.a.createElement("button",{type:"button",className:"notbutton",onClick:this.props.handleOpenModal},"Splitting options"),s.a.createElement(E.a,{isOpen:this.props.showModal,style:k},s.a.createElement("div",{className:"modal-header"},s.a.createElement("div",{className:"modal-title",id:"exampleModalLabel"},"Tweet splitting allows us to format your thread for you."),s.a.createElement("button",{onClick:this.props.handleCloseModal,type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},s.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),s.a.createElement("div",{className:"modal-body"},s.a.createElement("div",null,"Basic splitting:",s.a.createElement("input",{name:"Bsplitting",type:"checkbox",checked:this.props.Bsplitting,onChange:this.props.handleInputChange}))),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("div",{className:"b-7","data-dismiss":"modal"},s.a.createElement("button",{type:"submit2",onClick:this.props.handleCancel},"cancel")),s.a.createElement("div",{className:"b-6"},s.a.createElement("button",{type:"submit2",onClick:function(){console.log(t.props.splitting),t.props.splitting&&t.props.handleSplitting()}}," submit "))))))}}]),t}(s.a.Component),C=a(30),N=function(e){function t(e){return Object(l.a)(this,t),Object(c.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.username,t=s.a.createElement(C.Timeline,{dataSource:{sourceType:"profile",screenName:e},options:{username:e,height:"300",width:"600"},onLoad:function(){return console.log("Timeline is loaded!")}});return s.a.createElement("div",{className:"after-tweet"},s.a.createElement("div",{className:"after-tweet-header"},s.a.createElement("div",{className:"success-1"},"Success!"),s.a.createElement("div",{className:"success-2"},"Your thread of tweets was posted successfully.")),s.a.createElement("div",{className:"after-tweet-body"},t),s.a.createElement("div",{className:"after-tweet-footer"},s.a.createElement("button",{type:"link",onClick:this.props.handleHome2}," post another ")))}}]),t}(s.a.Component),S=function(e){function t(e){return Object(l.a)(this,t),Object(c.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.username,t=s.a.createElement(C.Timeline,{dataSource:{sourceType:"profile",screenName:e},options:{username:e,height:"300",width:"600"},onLoad:function(){return console.log("Timeline is loaded!")}});return s.a.createElement("div",{className:"after-tweet"},s.a.createElement("div",{className:"after-tweet-header"},s.a.createElement("div",{className:"fail-1"},"Uh-oh!"),s.a.createElement("div",{className:"fail-2"},"Your thread failed to post, we tried to delete the incomplete thread, but one or more tweets may still be on your feed. Please check your feed for unfinished threads.")),s.a.createElement("div",{className:"after-tweet-body"},this.props.response,t),s.a.createElement("div",{className:"after-tweet-footer"},s.a.createElement("button",{type:"link",onClick:this.props.handleHome3}," try again ")),s.a.createElement("button",{type:"button",className:"notbutton",onClick:this.props.handleHelp},"what happened?"))}}]),t}(s.a.Component),x=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleaddbox=a.handleaddbox.bind(Object(u.a)(Object(u.a)(a))),a.handleremovebox=a.handleremovebox.bind(Object(u.a)(Object(u.a)(a))),a.handleInputChange=a.handleInputChange.bind(Object(u.a)(Object(u.a)(a))),a.handleTweetChange=a.handleTweetChange.bind(Object(u.a)(Object(u.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(Object(u.a)(a))),a.handleHome2=a.handleHome2.bind(Object(u.a)(Object(u.a)(a))),a.handleHome3=a.handleHome3.bind(Object(u.a)(Object(u.a)(a))),a.handleCancel=a.handleCancel.bind(Object(u.a)(Object(u.a)(a))),a.handleSplitting=a.handleSplitting.bind(Object(u.a)(Object(u.a)(a))),a.handleOpenModal=a.handleOpenModal.bind(Object(u.a)(Object(u.a)(a))),a.handleCloseModal=a.handleCloseModal.bind(Object(u.a)(Object(u.a)(a))),a.handleFileUpload=a.handleFileUpload.bind(Object(u.a)(Object(u.a)(a)));var n=[];return n.push({index:0}),a.state={boxes:n,Bsplitting:!1,splitting:"off",tweetsent:"no",showModal:!1,response:"",uploadUrl:"",uploadData:{}},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.a.get(p+"/upload").then(function(t){e.setState({uploadUrl:t.data.url,uploadData:t.data.fields})})}},{key:"handleSubmit",value:function(){for(var e=this.state.boxes.length,t=[],a=0;a<e;a++)t.push({STATUS:"tweet"+a in this.state?this.state["tweet"+a]:"",MEDIA:"media"+a in this.state&&""!=this.state["media"+a]?[this.state["media"+a]]:[]});var n={TWEETS:t},s=new XMLHttpRequest;s.open("POST",p+"/post-thread",!1),s.withCredentials=!0,s.send(JSON.stringify(n));var o=s.response,i=JSON.parse(o);void 0!==i.errorMessage?this.setState({tweetsent:"fail",response:i.errorMessage}):this.setState({tweetsent:"success",response:i.body})}},{key:"handleHome2",value:function(){this.setState({tweetsent:"no",response:""})}},{key:"handleHome3",value:function(){this.setState({tweetsent:"no",response:""})}},{key:"handleaddbox",value:function(){var e=this.state.boxes;e.push({index:e.length}),this.setState({boxes:e})}},{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"handleremovebox",value:function(){var e,t=this.state.boxes;this.setState((e={},Object(f.a)(e,"tweet"+(this.state.boxes.length-1),""),Object(f.a)(e,"media"+(this.state.boxes.length-1),""),e)),t.splice(t.length-1,1),this.setState({boxes:t})}},{key:"handleSplitting",value:function(){for(var e="",t=0;t<this.state.boxes.length;t++)e+=this.state["tweet"+t]+" ";for(;this.state.boxes.length>0;)this.handleremovebox();var a=this.state.boxes;a.push({index:a.length}),this.setState({boxes:a});var n=function(e){return function(t){return[t.slice(0,e),t.slice(e+1)]}};if(0===e.length)this.setState(Object(f.a)({},"tweet0",""));else if(e.length>280){for(var s=279,o=[];" "!=e[s];)s--;var i=n(s)(e);for(this.setState(Object(f.a)({},"tweet0",i[0]));i[1].length>280;){for(s=279;" "!=i[1][s];)s--;i=n(s)(i[1]),o.push(i[0])}o.push(i[1]);for(var l=0;l<o.length;l++)this.handleaddbox(),this.setState(Object(f.a)({},"tweet"+(l+1),o[l]))}else this.setState(Object(f.a)({},"tweet0",e));this.setState({showModal:!1})}},{key:"handleCancel",value:function(){this.setState({Bsplitting:!1,splitting:"off"}),this.setState({showModal:!1})}},{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(f.a)({},n,a)),!0===this.state.Bsplitting?this.setState({splitting:"off"}):this.setState({splitting:"on"})}},{key:"handleTweetChange",value:function(e,t){this.setState(Object(f.a)({},e,t))}},{key:"handleFileUpload",value:function(e,t){this.setState(Object(f.a)({},e,t))}},{key:"render",value:function(){var e,t,a=this,n=this.state.boxes.map(function(e){return s.a.createElement(O,{key:e.index,id:e.index,onChange:a.handleTweetChange,value:a.state["tweet"+e.index],uploadUrl:a.state.uploadUrl,uploadData:a.state.uploadData,onUpload:a.handleFileUpload})});e=1===this.state.boxes.length?s.a.createElement("div",{className:"centeronebutton"},s.a.createElement("button",{className:"circlebutton",onClick:this.handleaddbox},"+")):s.a.createElement("div",{className:"centeronebutton"},s.a.createElement("button",{className:"circlebutton",onClick:this.handleremovebox},"-"),s.a.createElement("button",{className:"circlebutton",onClick:this.handleaddbox},"+"));var o=s.a.createElement("div",{className:"b-3"},s.a.createElement("button",{type:"submit2",onClick:this.handleSubmit},"submit"));return t="success"===this.state.tweetsent?s.a.createElement(N,{handleHome2:this.handleHome2,response:this.state.response,username:this.props.username}):"fail"===this.state.tweetsent?s.a.createElement(S,{handleHome3:this.handleHome3,handleHelp:this.props.handleHelp,response:this.state.response,username:this.props.username}):this.state.showModal?s.a.createElement("div",{className:"sub-body"},s.a.createElement(j,{showModal:this.state.showModal,Bsplitting:this.state.Bsplitting,splitting:this.state.splitting,handleInputChange:this.handleInputChange,handleCancel:this.handleCancel,handleOpenModal:this.handleOpenModal,handleSplitting:this.handleSplitting,handleCloseModal:this.handleCloseModal}),e,o):s.a.createElement("div",{className:"sub-body"},s.a.createElement(j,{showModal:this.state.showModal,Bsplitting:this.state.Bsplitting,splitting:this.state.splitting,handleInputChange:this.handleInputChange,handleCancel:this.handleCancel,handleOpenModal:this.handleOpenModal,handleSplitting:this.handleSplitting,handleCloseModal:this.handleCloseModal}),n,e,o),s.a.createElement("div",{className:"main-body"},t)}}]),t}(s.a.Component),M=function(e){function t(e){return Object(l.a)(this,t),Object(c.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"main-footer"},s.a.createElement("div",{className:"h-1"},s.a.createElement("button",{type:"link",onClick:this.props.handleHelp}," help ")),s.a.createElement("div",{className:"h-2",onClick:this.props.handleHome},s.a.createElement("img",{width:"55px",src:a(76),alt:"logo2"})),s.a.createElement("div",{className:"h-5"},s.a.createElement("button",{type:"link",onClick:this.props.handleContact}," contact us ")))}}]),t}(n.Component),H=function(e){function t(e){return Object(l.a)(this,t),Object(c.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"splash-footer"},s.a.createElement("div",{className:"splash-header"},s.a.createElement("div",{className:"splash-1"},"Threaded Tweeter")),s.a.createElement("div",{className:"splash-body"},s.a.createElement("div",{className:"splash-2"},s.a.createElement("button",{type:"link",onClick:this.props.handleContact}," contact us ")),s.a.createElement("div",{className:"splash-3"},s.a.createElement(b,{checkLoginStatus:this.props.checkLoginStatus,componentDidMount:this.props.componentDidMount,logout:this.props.logout,loginUrl:this.props.loginUrl,resourceOwnerKeyCookie:this.props.resourceOwnerKeyCookie,resourceOwnerSecretCookie:this.props.resourceOwnerSecretCookie,username:this.props.username,isLoggedIn:this.props.isLoggedIn})),s.a.createElement("div",{className:"splash-4"},s.a.createElement("button",{type:"link",onClick:this.props.handleHelp}," help "))),s.a.createElement("div",{className:"splash-subfooter"},s.a.createElement("div",{className:"splash-5"},"An innovative tool for quick and easy threaded tweets"),s.a.createElement("img",{width:"100px",src:a(76),alt:"logo2"}),s.a.createElement("div",{className:"splash-5"},"By logging in you consent to our use of cookies.")))}}]),t}(n.Component),T=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"help"},s.a.createElement("div",{className:"help-header"},"Contact us"),s.a.createElement("div",{className:"help-body"},'We are creating a tool called "Threaded Tweeter" which will serve as a tool for computer power users to quickly and easily compose and post threaded tweets. The core product will be a command line tool that allows a user to compose a tweet thread in their preferred text editor, and post to twitter from the comfort of their terminal emulator.',s.a.createElement("div",{className:"help-subheader"},"https://github.com/conro1108/TTDeploy"),s.a.createElement("div",{className:"help-subheader"})))}}]),t}(n.Component),L=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"help"},s.a.createElement("div",{className:"help-header"},"Help"),s.a.createElement("div",{className:"help-body"},s.a.createElement("div",{className:"help-subheader"},"General information:"),"Threaded Tweeter is a web application that can help you make threaded tweets on twitter. You have full control of what content goes in each tweet, including pictures, but we can format you tweets for you as well.",s.a.createElement("div",{className:"help-subheader"},"How to create a thread:"),"Users must first login with twitter and authorize our app to post tweets on their page. Threaded tweeter will only post threads you create, and delete unfinished threads if there was a fatal error. Type or paste your tweet into the textbox. Use the \u201c+\u201d button to add a new tweet to your thread. Tweets appear on the page in order, first to last. Click the \u201c-\u201d button to remove a tweet from your thread. You can attach a picture to any tweet by clicking the button to the bottom left of each tweet box. Click the button again is you want to replace the picture with a different one. Each tweet can have one picture attached. If the tweet has an attached picture you do not have to write anything in the box for it to post. Tweets are constrained by Twitter\u2019s 280 character count. Threaded Tweeter shows an indicator of your current character count for each tweet at the bottom right of the textbox. Our app can automatically split and format your tweets for you. Click \u201csplitting options\u201d above the text box to access these. Basic splitting will split at the word-level. Click \u201csend\u201d to publish your tweet. After publishing a tweet, you should see a \u201cSuccess\u201d message and a window showing your thread.",s.a.createElement("div",{className:"help-subheader"},"Tweet splitting options:"),"Splitting can be done at the end of the next word.",s.a.createElement("div",{className:"help-subheader"},"Errors:"),"If you received an error notice it may have been caused by some of these common errors: Attempting to post a tweet with out a valid login. Attempting to post a tweet over the character limit. Attempting to attatch an invalid file/picture to your tweet. Making a tweet that is the exact same as an another tweet; the first tweet in every thread must be something unique you have never posted before. Authentication or authorization failures. Connection/Internet failures. If a failure occurs after some of the thread has already been posted, Threaded Tweeter will attempt to delete them for you. Certain errors, such as a dropped connection, may make it impossible to delete the unfinished thread. Threaded Tweeter will show you your timeline after a failure occurs, so you can check for partial threads and delete them manually. If you cannot see the timeline, try disabling adblocker and relead the page.",s.a.createElement("div",{className:"help-subheader"})))}}]),t}(n.Component),I=new(a(80).a),U=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={isLoggedIn:!1,help:!1,contact:!1,loginUrl:"",resourceOwnerKeyCookie:"",resourceOwnerSecretCookie:"",username:null},a.handleHelp=a.handleHelp.bind(Object(u.a)(Object(u.a)(a))),a.handleContact=a.handleContact.bind(Object(u.a)(Object(u.a)(a))),a.handleHome=a.handleHome.bind(Object(u.a)(Object(u.a)(a))),a.logout=a.logout.bind(Object(u.a)(Object(u.a)(a))),a.checkLoginStatus=a.checkLoginStatus.bind(Object(u.a)(Object(u.a)(a))),a.componentDidMount=a.componentDidMount.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleHelp",value:function(){this.setState({help:!0,contact:!1})}},{key:"handleContact",value:function(){this.setState({help:!1,contact:!0})}},{key:"handleHome",value:function(){this.setState({help:!1,contact:!1})}},{key:"logout",value:function(){I.remove("access_token_key",{path:"/",domain:m}),I.remove("access_token_secret",{path:"/",domain:m}),window.location.reload()}},{key:"checkLoginStatus",value:function(){var e=this,t=Object.assign({},this.state);return w.a.get(p+"/login/status",{withCredentials:!0}).then(function(a){t.isLoggedIn=a.data.Status,t.username=a.data.username,e.setState(t)},function(a){t.isLoggedIn=!1,e.setState(t)})}},{key:"componentDidMount",value:function(){var e=this;this.checkLoginStatus().then(function(t){e.state.isLoggedIn||e.setState({isLoggedIn:!1,username:null})})}},{key:"render",value:function(){var e,t=s.a.createElement(g,{handleHome:this.handleHome,checkLoginStatus:this.checkLoginStatus,componentDidMount:this.componentDidMount,logout:this.logout,loginUrl:this.state.loginUrl,resourceOwnerKeyCookie:this.state.resourceOwnerKeyCookie,resourceOwnerSecretCookie:this.state.resourceOwnerSecretCookie,username:this.state.username,isLoggedIn:this.state.isLoggedIn}),a=s.a.createElement(M,{handleHelp:this.handleHelp,handleContact:this.handleContact,handleHome:this.handleHome});return e=!0===this.state.help?s.a.createElement("div",{className:"bodystyle"},t,s.a.createElement(L,null),a):!0===this.state.contact?s.a.createElement("div",{className:"bodystyle"},t,s.a.createElement(T,null),a):!0===this.state.isLoggedIn?s.a.createElement("div",{className:"bodystyle"},t,s.a.createElement(x,{handleHelp:this.handleHelp,username:this.state.username}),a):s.a.createElement(H,{handleHelp:this.handleHelp,handleContact:this.handleContact,checkLoginStatus:this.checkLoginStatus,componentDidMount:this.componentDidMount,logout:this.logout,loginUrl:this.state.loginUrl,resourceOwnerKeyCookie:this.state.resourceOwnerKeyCookie,resourceOwnerSecretCookie:this.state.resourceOwnerSecretCookie,username:this.state.username,isLoggedIn:this.state.isLoggedIn}),s.a.createElement("div",null,e)}}]),t}(n.Component),D=(a(199),a(202)),B=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(D.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(U,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},76:function(e,t,a){e.exports=a.p+"static/media/logo2.6ed5019e.JPG"},81:function(e,t,a){e.exports=a(201)},86:function(e,t,a){},88:function(e,t,a){e.exports=a.p+"static/media/logo.56a41b55.JPG"}},[[81,2,1]]]);
//# sourceMappingURL=main.8f9e7f4f.chunk.js.map