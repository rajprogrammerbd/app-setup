import React from 'react';

function App() {
  const [state, setState] = React.useState({ name: 'Raj Dutta' });
  React.useEffect(() => {
    if ('OTPCredential' in window) {
      window.addEventListener('DOMContentLoaded', () => {
        const ac = new AbortController();
        navigator.credentials.get({
          otp: { transport: ['sms'] },
          signal: ac.signal,
        }).then((otp) => {
          setState({ name: JSON.stringify(otp) });
        }).catch((err) => {
          setState({ name: JSON.stringify(err) });
        });
      });
    } else {
      window.alert('WebOTP not supported!.');
    }
  }, []);

  return (state.name) ? <p>{JSON.stringify(state.name)}</p> : <p>Nothing to show</p>;
}

export default App;
