import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [num, setNum] = useState();
  const [toggle, setToggle] = useState(false);
  const [mobileNumber, setMobileNumber] = useState();

  const handleNumber = (e) => {
    let text = e.target.value;
    if (!isNaN(text)) {
      text.length <= 10 && setNum(text);
      text.length == 10 ? setToggle(true) : setToggle(false);
    }
  };

  const handleClick = (e) => {
    setMobileNumber(num);
  };
  const handleClear = () => {
    setNum('');
    setMobileNumber('');
    setToggle(false);
  };
  return (
    <div>
      <input
        placeholder="Enter your number"
        type="text"
        max="10"
        value={num}
        onChange={handleNumber}
      />
      {toggle && <button onClick={handleClick}>submit</button>}

      <Child mobileNumber={mobileNumber} handleClear={handleClear} />
    </div>
  );
}
function Child({ mobileNumber, handleClear }) {
  return (
    <>
      {mobileNumber}
      {mobileNumber && <button onClick={handleClear}>clear</button>}
    </>
  );
}
