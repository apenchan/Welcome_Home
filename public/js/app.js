console.log("I'm working!");

// var ApplicationDisplay = React.createClass({
//   getInitialState: function(){
//     var cookieCheck;
//     if(document.cookie){
//       cookieCheck = true;
//     } else {
//       cookieCheck = '';
//     }
//     return {
//     authenticatedUser: cookieCheck,
//   };
// },
//   changeLogin: function(){
//     this.setState({
//       authenticatedUser: true
//     })
//   },
//   //this refreshes the page after initial signup
//   handleReset: function(){
//     this.setState({
//       authenticatedUser: ''
//     });
//   },
//   render: function(){
//     console.log(this.state.authenticatedUser);
//     if(this.state.authenticatedUser === true){
//       return (
//         <div>
//           <Homepage logout={this.handleReset}/>
//         </div>
//           )
//     } else {
//     return (
//       <div className="front-page">
//             <div className="header">
//                <h2>Find Me Uni</h2>
//             </div>
//             <div className="website-blurb">
//                Where are you're friends going? Be there cheerleader!
//             </div>
//             <div className="forms">
//             <div className="login">
//               <LoginForm
//                 initalLoginCheck={this.state.authenticatedUser}
//                 onChange={this.changeLogin}
//               />
//             <div className="signup">
//               <SignupForm
//                 initialCreate={this.state.authenticatedUser}
//                 onChange={this.changeLogin}
//               />
//                   </div>
//                 </div>
//               </div>
//           </div>
//       )
//       }
//     }
// });

// ReactDOM.render(
//   <div>
//   <ApplicationDisplay/>
//   </div>,
//   document.getElementById('content-container')
//   );

