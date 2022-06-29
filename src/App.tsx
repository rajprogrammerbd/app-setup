/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import NumberFormat from 'react-number-format';

function App() {
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');

  const changeText = (e: any) => {
    const { value } = e.target;
    setText(value.replace(/[^A-Z]/gi, ''));
  };

  const changeNumber = (e: any) => {
    const { value } = e.target;
    setNumber(value);
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
          <NumberFormat format="######" value={number} onChange={changeNumber} placeholder="Enter the number" className="border border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
        </label>
      </form>
    </>
  );
}

export default App;
