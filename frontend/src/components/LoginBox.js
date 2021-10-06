import React from 'react'
import axios from 'axios';

class LoginBox extends React.Component {

   state = {
      email: "",
      password: ""
   };

   login = e => {
      e.preventDefault();
      console.log(this.state.email);
      console.log(this.state.password);
      const data = {
         username: this.state.email,
         password: this.state.password
      }
      axios.post("http://localhost:8000/api/auth/login/", data).then(res => {
         if (res.status == '200') {
            console.log("LOGGING IN")
         }
         console.log(res.status);
         console.log(res.data.token);
         localStorage.setItem("token", res.data.token);
      })
   }

   register = e => {
      e.preventDefault();
      console.log("REGISTERING");
      console.log(this.state.email);
      console.log(this.state.password);
      const data = {
         email: this.state.email,
         password: this.state.password
      }
      axios.post("http://localhost:8000/api/auth/register/", data).then(res => {
         console.log(res);
         console.log(res.data);
      })
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