import React, { Component } from "react";

export default class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    /* Initalize the API library */
    window.gapi.load("client:auth2", () => {
      /* CallBack Fn */

      window.gapi.client
        .init({
          clientId:
            "746887564324-gfl812taok34llaujrieau9gooj91v8h.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          //   this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onSignIn = () => {
    this.auth.signIn();
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignOut = () => {
    this.auth.signOut();
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return <div onClick={this.onSignOut}>Sign Out</div>;
    } else return <div onClick={this.onSignIn}>Google Sign In</div>;
  }

  render() {
    return this.renderAuthButton();
  }
}
