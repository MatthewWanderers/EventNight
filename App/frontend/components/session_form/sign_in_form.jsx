import React from 'react';
import { withRouter } from 'react-router-dom';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Matthew',
      password: 'password'
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
          <h1>SIGN IN</h1>
          <br/>
          <p>Enter your email to sign up or log in.</p>
          <br/>
          {this.renderErrors()}
          <div className="signin-form">
            <br/>
            <label>Email address
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br/>

            <br/>
            <input className="session-submit" type="submit" value="Get Started" />
        </div>
        {this.props.navLink}
        </form>
      </div>
    );
  }
}

export default withRouter(SignInForm);
