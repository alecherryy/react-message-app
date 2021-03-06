import '../styles.scss';
import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    user: {
      username: '',
      password: '',
    }
  };

  login = (e) => {
    e.preventDefault();
    const path = `http://${document.location.host}/prattle/rest/user/signin`;
    fetch(path, {
      method: 'POST',
      body: JSON.stringify(this.state.user),
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'mode':'no-cors'
      }
    }).then(res => {
      if (!res.ok) {
        alert('Login failed');
        const err = `<p>Something went wrong</p>`;
        document.getElementsByClassName('form').append(err);
      } else {
        alert('Login successful!');
      }
    })
  }

  render() {
    return (
    <form className="form" action="post"
        onSubmit={e => {
        this.login(e);
      }}
    >
      <input 
        autocomplete="off"
        id="username"
        datatype="username"
        type="text"
        placeholder="Username"
        value={this.state.user.username}
        onChange={(e) => this.setState({
          user: {
            ...this.state.user,
            username: e.target.value
          }
        })}
      />
      <input 
        autocomplete="off"
        id="password"
        datatype="password"
        type="password"
        placeholder="Password"
        value={this.state.user.password}
        onChange={(e) => this.setState({
          user: {
            ...this.state.user,
            password: e.target.value
          }
        })}
      />
      <input 
        type="submit"
        className="button button--signup"
        value="Login"
        id="signup"
      />
    </form>
    )
  }
}

export default LoginForm;