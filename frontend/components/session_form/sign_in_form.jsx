import React from 'react';
import { withRouter } from 'react-router-dom';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Demo Account',
      password: 'password'
    };
    this.demoUser = {
      username: 'Demo Account',
      password: 'password'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillUnmount() {
    this.props.receiveErrors([]);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container session-form">
        <form onSubmit={this.handleSubmit} className="signin-form-box">
          <h1>E</h1>
          <br/>
          <h2>Let's get started</h2>
          <br/>
          <p>Enter your username and password to log in.</p>
          <br/>
          {this.renderErrors()}
          <div className="signin-form">
            <br/>
              <label>Username <br/>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                />
              </label>
            <br/>
              <label>Password<br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
            <br/>
              <input className="session-submit" type="submit" value="Log in" />
            <br/>
              <input className="session-submit demo" type="submit" value="Demo Account" />
        </div>
        <p className="switch-form">{this.props.navLink}</p>
        </form>
      </div>
    );
  }
}

export default withRouter(SignInForm);
