import React, { useState, useEffect } from "react";

const InputField = (props) => {
  const [error,setError]=useState("")

  const getUserOptions = (e) => {
    props.getUserInputField(e);
  };

  const setUserInputFromField = (e) => {
    if(!isNaN(e.target.value) && isFinite(e.target.value)){
      console.log(props)
      props.getUserInputField(e);
      setError("")
    }else{
      setError("Input Must be number beewtween 100 and 0")
    }

  };

  return (
    <div className="input-group mb-3">
    
      <input
        type="text"
        id={props.id}
        className="form-control"
        aria-label="Text input with dropdown button"

        onChange={(e) => {
          setUserInputFromField(e);
        }}
      />
      <br></br>
        {error!=="" && <span className="alert alert-danger">{error}</span> }
        <button type="button"
         className="btn btn-warning dropdown-toggle"
         data-bs-toggle="dropdown" aria-expanded="false">
    Choose currency
  </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
        {props.list.map((coin,_) => (
          <li
            onClick={(e) => {
              getUserOptions(e);
            }}
            key={coin}
            value={coin}
            innertext={coin}
          >
            <button type="button" className="dropdown-item" 
            value={coin} id="select_condition">
              {coin ? coin : "?"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InputField;
