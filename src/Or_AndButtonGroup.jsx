import React, { useState, useEffect } from "react";

function Or_AndButtonGroup(props) {
  const [action_options, setActionOptions] = useState([props.list]);
  const [selectedORAND, setSelectedORAND] = useState("AND");
  const [selectedActions_Options, setSelectedActions_Options] = useState("");

  const getUserOptions = (e) => {
    console.log(e.target.innerText);
    setSelectedORAND(e.target.innerText);
  };

  return (
    <div>
      <div className="btn-group alert-success">
        {props.list.map((option, index) => {
          return (
            <>
              <input
                key={index}
                value={option}
                labels={props.label}
                name={props.id}
                id={props.id}
                type="radio"
                className="btn-check"
                checked={selectedORAND === option}
                readOnly
              />
              <label
                className="btn btn-outline-primary"
                onClick={(e) => {
                  getUserOptions(e);
                }}
              >
                {option}
              </label>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Or_AndButtonGroup;
