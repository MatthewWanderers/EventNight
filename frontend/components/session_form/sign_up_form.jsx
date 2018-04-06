import React from 'react';
import { withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
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
          <p>Enter your username and password to sign up.</p>
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
              <label>Email<br/>
                <input type="email"
                  value={this.state.email}
                  onChange={this.update('email')}
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
            <input className="session-submit" type="submit" value="Get Started" />
          </div>
        <p className="switch-form">{this.props.navLink}</p>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
