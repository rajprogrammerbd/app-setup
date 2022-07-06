/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/state-in-constructor */
import React from 'react';

export default class App extends React.Component {
  state = {
    otp: '',
  };

  componentDidMount() {
    if ('OTPCredential' in window) {
      navigator.credentials
        .get({
          otp: { transport: ['sms'] },
        })
        .then((otp: any) => {
          this.setState({ otp: JSON.stringify(otp).toString() });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    const { otp } = this.state;
    return (
      <div className="App">
        <br />
        <br />
        <br />
        <br />
        <h2>
          Your OTP is:
          {' '}
          {otp}
        </h2>
        <br />
        <br />
        <br />
        <br />
        <h3>The Web OTP API Docs</h3>
        <div>
          Send an SMS that includes
          <pre>
            <code>@web-otp-shravan.netlify.app #12345</code>
          </pre>
          at the last line to this phone.
          <pre>
            <code>please don't use https:// and / end of the url</code>
          </pre>
          <pre style={{ color: 'green' }}>
            <code>example for use @www.google.com</code>
          </pre>
          <pre style={{ color: 'red' }}>
            <code>example for not use XXXXX @https://www.google.com XXXXX</code>
          </pre>
        </div>
      </div>
    );
  }
}

// time to test in mobile phone
