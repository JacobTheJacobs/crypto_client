import React, { useState, useEffect } from "react";

function Or_AndButtonGroup(props) {
  const [action_options, setActionOptions] = useState([props.list]);
  const [selectedORAND, setSelectedORAND] = useState("AND");
  const [selectedActions_Options, setSelectedActions_Options] = useState("");

  const getUserOptions = (e) => {
    props.getSelectUserInput(e)
  };

  return (
    <div>
      <div className="btn-group alert-success">
        {props.list.map((option, index) => {
          return (
            <div  key={index} >
              <input
                value={selectedORAND}
                labels={props.label}
                name={props.id}
                type="radio"
                className="btn-check"
              />
              <label
                 id={props.id}
                className="btn btn-outline-primary"
                onClick={(e) => {
                  getUserOptions(e);
                }}
              >
                {option}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Or_AndButtonGroup;
