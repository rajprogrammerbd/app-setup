import React from 'react';

function App() {
  const [state, setState] = React.useState({ name: 'default' });
  React.useEffect(() => {
    if ('OTPCredential' in window) {
      window.addEventListener('DOMContentLoaded', () => {
        navigator.credentials.get({
          otp: { transport: ['sms'] },
        }).then((otp: any) => {
          setState({ name: otp.code });
        }).catch(() => {
          setState({ name: 'something is fishy' });
        });
      });
    }
  }, []);

  return (
    <form>
      <input style={{ border: '1px solid #ddd' }} type="text" autoComplete="one-time-code" onChange={(e: any) => setState(e.target.value)} value={state.name} required />
      <input type="submit" />
    </form>
  );
}

export default App;
