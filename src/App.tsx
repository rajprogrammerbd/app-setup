import React from 'react';

function App() {
  React.useEffect(() => {
    if ('OTPCredential' in window) {
      window.addEventListener('DOMContentLoaded', () => {
        const ac = new AbortController();
        navigator.credentials.get({
          otp: { transport: ['sms'] },
          signal: ac.signal,
        }).then((otp) => {
          window.alert(otp);
        }).catch((err) => {
          window.alert(err);
        });
      });
    } else {
      window.alert('WebOTP not supported!.');
    }
  }, []);

  return <h4>Hello World</h4>;
}

export default App;
