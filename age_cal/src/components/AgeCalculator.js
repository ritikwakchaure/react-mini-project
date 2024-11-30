import React, { useState } from "react";
import "./AgeCalculator.css";
const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setAge(age);
  };
  
  const reset = () =>{
    setAge(0)
    setBirthdate(0)
  }

  return (
    <div className="Container">
      <h2 className="heading container_tittle">Age calculator</h2>
      <p className="para container_tittle">
        The age calculator can determine the age
      </p>
      <div className="Container_middle">
        <div className="right">
          <h4>Date of Birth</h4>
          <input
            className="date"
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
          <div className="button_div">
            <button className="button-65" onClick={calculateAge}>
              {" "}
              calculate Age
            </button>
            <button className="button-65" onClick={reset}> Reset</button>
          </div>
        </div>

        <div className="left">
          <div className="Container_middle_para">
            <h1>Your Age is</h1>
          </div>
          <h1 className="age_heading">{age > 0 ? `${age}`:""}</h1>
        </div>
      </div>
    </div>
  );
};


export default AgeCalculator;