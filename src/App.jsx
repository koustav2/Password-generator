/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import './App.css'
import UsePassGen from './hooks/UsePassGen';
import Strength from './components/Strength';

function App() {
  const [length, setLength] = useState(10)

  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false }
  ]);
  const [copied, setCopied] = useState(false);

  const { password, error, generatePassword } = UsePassGen()

  const handleCopy = () => {
    navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  return (
    <div className='flex'>
      {password &&
        <div className='container'>
          <div className='header'>
            <div className="title">{password}</div>
            <button
              type=""
              className='copyBtn'
              onClick={handleCopy}>
              {copied ? "Copied" : "copy"}
            </button>
          </div>
        </div>}
      <div className='container'>
        <div className="charlength">
          <span>
            <label>Character Length</label>
            <label>{length}</label>
          </span>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        {/* chechboxes */}
        <div className="checkboxes">
          {checkboxData.map((checkbox, index) => {
            return (
              <div className="checkbox" key={index}>
                <input
                  type="checkbox"
                  id={index}
                  checked={checkbox.state}
                  onChange={(e) => {
                    let temp = [...checkboxData];
                    temp[index].state = e.target.checked;
                    setCheckboxData(temp);
                  }}
                />
                <label htmlFor={index}>{checkbox.title}</label>
              </div>
            );
          })}
        </div>
        {/* strength */}
        <Strength password={password} />

        {/* error */}
        {error && <div className="errorMessage">{error}</div>}
        {/* password generator button */}
        <button type=""
          className='generateBtn'
          onClick={() => generatePassword(checkboxData, length)}
        >
          generate
        </button>
      </div>
    </div>
  )
}

export default App
