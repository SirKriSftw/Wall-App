import React from 'react'
import axios from 'axios';

class LoginBox extends React.Component {

   state = {
      email: "",
      password: ""
   };

   login = e => {
      e.preventDefault();
      console.log("LOGGING IN");
      console.log(this.state.email);
      console.log(this.state.password);
   }

   register = e => {
      e.preventDefault();
      console.log("REGISTERING");
      console.log(this.state.email);
      console.log(this.state.password);
   }

    render() {
        return (            
            <div className="login_box">
        <form>
                 <label for="login_title">Login to the wall</label>
                 <div>
                    <textarea rows='1' name='login' onChange={e => this.setState({email: e.target.value})} placeholder="Email"/>
                 </div>
                 <div>
                    <textarea rows='1' name='login' onChange={e => this.setState({ password: e.target.value })} placeholder="Password"/>
                 </div>
                 <div>
                     <button className="login" onClick={this.login}>Login</button>
                     <button className="register" onClick={this.register}>Register</button>
                 </div>
        </form>
        
            </div>
        )
    }
}

export default LoginBox;