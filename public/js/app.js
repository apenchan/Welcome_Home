console.log("I'm working!");

var ApplicationDisplay = React.createClass({
getInitialState: function(){
  var cookieCheck;
  if(document.cookie){
    cookieCheck = true;
  } else {
    cookieCheck = '';
  }
  return {
  authenticatedUser: cookieCheck,
};
},
changeLogin: function(){
  this.setState({
    authenticatedUser: true
  })
},
//this refreshes the page after initial signup
handleReset: function(){
  this.setState({
    authenticatedUser: ''
  });
},
render: function(){
  console.log(this.state.authenticatedUser);
  if(this.state.authenticatedUser === true){
    return (
      <div>
        <Homepage logout={this.handleReset}/>
      </div>
        )
  } else {
  return (
    <div className="front-page">
          <div className="header">
             <h2>Homebound, Travel Range</h2>
          </div>
          <div className="website-blurb">
             Where are you're friends going? Be their cheerleader!
          </div>
          <div className="forms">
          <div className="login">
            <LoginForm
              initalLoginCheck={this.state.authenticatedUser}
              onChange={this.changeLogin}
            />
          <div className="signup">
            <SignupForm
              initialCreate={this.state.authenticatedUser}
              onChange={this.changeLogin}
            />
                </div>
              </div>
            </div>
        </div>
    )
    }
  }
});

var LoginForm = React.createClass({
  getInitialState: function() {
    return{
      username: this.props.initialLoginCheck,
      password: this.props.initialLoginCheck,
      loginStatus: this.props.initialLoginCheck
    };
  },
  handleLoginFormChange: function(stateName, e) {
    var change= {};
    change[stateName] = e.target.value;
    this.setState(change);
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var username = this.state.username.trim();
    var password = this.state.password.trim();
    console.log("work baby work");
    this.loginAJAX(username, password);
  },
  loginAJAX: function(username, password) {
    $.ajax({
      url: "/auth/",
      method: "POST",
      data: {
        username: username,
        password: password
      },
      success: function(data) {
        console.log("cookie is set");
        Cookies.set('jwt_token', data.token);
        console.log(data);
        //below will set the cookie to the data it was fed (ie username change)
        this.props.onChange(data.token)
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this),
    });
  },
  render: function(){
    return(
      <div className="login">
        <div className="login-form">
        <h3>Login </h3>
        <form onSubmit={this.handleSubmit}>
        <input className="username-login-form"
        type="text"
        placeholder="Email"
        value={this.state.username}
        onChange={this.handleLoginFormChange.bind(this,'username')}/>
        <br/>
        <input className="password-login-form"
        type="text"
        placeholder="password"
        value={this.state.password}
        onChange={this.handleLoginFormChange.bind(this,'password')}/>
        <br/>
        <input type="submit"/>
        </form>
        </div>
        </div>
      );
  }
});

var SignupForm = React.createClass({
  getInitialState: function() {
    return{
      firstName: this.props.initialCreate,
      lastName: this.props.initialCreate,
      username: this.props.initialCreate,
      password: this.props.initialCreate,
      loginStatus: this.props.initialCreate
    };
  },
  handleSignupFormChange: function(stateName, e) {
    var change= {};
    change[stateName] = e.target.value;
    this.setState(change);
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var firstName = this.state.firstName.trim();
    var lastName = this.state.lastName.trim();
    var username = this.state.username.trim();
    var password = this.state.password.trim();
    this.signupAJAX(firstName, lastName, username, password);
  },
  signupAJAX: function(firstName, lastName, username, password) {
    $.ajax({
      url: "/users/register",
      method: "POST",
      data: {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password
      },
      success: function(data){
        this.setState({
          firstName: this.props.initialCreate,
          lastName: this.props.initialCreate,
          username: this.props.initialCreate,
          password: this.props.initialCreate
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });
  },
  render: function(){
    return(
      <div className="signup">
        <div className="signup-form">
        <h3>Create Account </h3>
        <form onSubmit={this.handleSubmit}>

        <input className="firstName-login-form"
        type="text"
        placeholder="First name"
        value={this.state.firstName}
        onChange={this.handleSignupFormChange.bind(this,'firstName')}/>
        <br/>
        <input className="lastName-login-form"
        type="text"
        placeholder="Last name"
        value={this.state.lastName}
        onChange={this.handleSignupFormChange.bind(this,'lastName')}/>
        <br/>
        <input className="username-login-form"
        type="text"
        placeholder="Email Address"
        value={this.state.username}
        onChange={this.handleSignupFormChange.bind(this,'username')}/>
        <br/>
        <input className="password-login-form"
        type="text"
        placeholder="password"
        value={this.state.password}
        onChange={this.handleSignupFormChange.bind(this,'password')}/>
        <br/>
        <input type="submit"/>
        </form>
        </div>
        </div>
      );
  }
});

// var Homepage = React.createClass({
//   getInitialState: function(){
//     return {

//     }
//   }
// })

ReactDOM.render(
<div>
<ApplicationDisplay/>
</div>,
document.getElementById('content-container')
);

