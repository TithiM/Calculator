// Calculator.js

import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [history, setHistory] = useState("");
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(displayValue);
        setDisplayValue(result);
        setHistory((prevHistory) => prevHistory + displayValue + " = " + result + "\n");
      } catch (error) {
        setDisplayValue("Error");
      }
    } else if (value === "C") {
      setDisplayValue("");
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  const toggleHistory = () => {
    setIsHistoryVisible(!isHistoryVisible);
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="bt"><button className="history-button" onClick={toggleHistory}>
        </button>
        
        {isHistoryVisible && (
          <div className="history">
            <pre>{history}</pre>
          </div>
        )}
        </div>
        <div className="display-screen" style={{ backgroundColor: "darkblue" }}>
          {displayValue}
        </div>
      </div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button className="op" onClick={() => handleButtonClick("C")}>C</button>
          <button className="op" onClick={() => handleButtonClick("/")}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("*")}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button  onClick={() => handleButtonClick("-")}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick(".")}>.</button>
          <button onClick={() => handleButtonClick("=")}>=</button>
          <button  onClick={() => handleButtonClick("+")}>+</button>
          
        </div>
      </div>
    </div>
  );
};

export default Calculator;

