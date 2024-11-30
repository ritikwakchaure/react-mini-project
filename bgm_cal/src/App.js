import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, SetMessage] = useState("");

  // /logic
  let calBmi = (evrent) => {
    //prevent submitting to the server
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("please enter a valid weight and height");
    } else {
      let bmi = (weight / ((height * height) / 1000)).toFixed(2);
      setBmi(bmi);
      if (bmi < 18.5) {
        SetMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        SetMessage("You are normal");
      } else {
        SetMessage("You are overweight");
      }
    }
  };

  let reload = () => {
    setWeight(0);
    setHeight(0);
    setBmi("");
    SetMessage("");
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BGM Calculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label> Weight(lbs) </label>
            <input
              type="text"
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label> height(in) </label>
            <input
              type="text"
              placeholder="Enter height value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3> Your BMI is:{bmi}</h3>
            <p>{message} </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
