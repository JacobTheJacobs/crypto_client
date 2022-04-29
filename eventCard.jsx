import React from "react";

function EventCard(props) {
  const handleInputBack = (e) => {
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
      {" "}
      <div>
        {props.condition.id > 0 && props.last ? (
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
        ) : null}

        <select onChange={(e) => handleInputBack(e)} id={props.ids[0]} name="">
          {props.coins.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
        <select onChange={(e) => handleInputBack(e)} id={props.ids[1]} name="">
          {props.strategy.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
        <select onChange={(e) => handleInputBack(e)} id={props.ids[2]} name="">
          {props.strategy_condition.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
        <input id={props.ids[3]} onChange={(e) => handleInputBackInput(e)} />
        <select onChange={(e) => handleInputBack(e)} id={props.ids[4]} name="">
          {props.strategy_condition_option.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
        <select onChange={(e) => handleInputBack(e)} id={props.ids[5]} name="">
          {props.timeframe.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default EventCard;
