import React from "react";

function ActionCard(props) {
  const handleInputBack = (e) => {
    console.log(e.target.value);
    props.handleInput(e);
  };
  const handleInputBackInput = (e) => {
    props.handleInput(e);
  };
  const deleteTab = (e) => {
    props.deleteCard(props.condition.id);
  };
  return (
    <>
      <div>
        <div
          style={{
            border: "1px solid",
            borderRadius: "5px",
            padding: "1px",
            position: "absolute",
            right: "0",
            borderColor: "red",
          }}
          onClick={(e) => {
            deleteTab(e);
          }}
        >
          X
        </div>
        <select onChange={(e) => handleInputBack(e)} id={props.ids[7]} name="">
          {props.coins.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
        <input id={props.ids[8]} onChange={(e) => handleInputBackInput(e)} />
        <select onChange={(e) => handleInputBack(e)} id={props.ids[9]} name="">
          {props.strategy_condition_option.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
        <select onChange={(e) => handleInputBack(e)} id={props.ids[10]} name="">
          {props.order_type.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default ActionCard;
