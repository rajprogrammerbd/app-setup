/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');

  const changeText = (e: any) => {
    const { value } = e.target;
    setText(value.replace(/[^A-Z]/gi, ''));
  };

  const changeNumber = (event: any) => {
    event.target.value = event.target.value.replace(/[^0-9]*/g, '');

    setNumber(event.target.value);
  };

  const keyDown = (event: any) => {
    if (event.key === '.') {
      event.preventDefault();
    }
  };

  return (
    <>
      <form className="block">
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Input type text</span>
          <input type="text" value={text} onChange={changeText} placeholder="Enter the text" className="border border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
        </label>
      </form>
      <form className="block">
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Input type number</span>
          <input type="number" value={number} onKeyDown={keyDown} onChange={changeNumber} placeholder="Enter the text" className="border border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
        </label>
      </form>
    </>
  );
}

export default App;
