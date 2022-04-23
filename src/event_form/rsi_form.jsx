import React, { useState, useEffect } from "react";
import ButtonGroup from "../ButtonGroup";
import InputField from "../input_field";
import SelectOption from "../select_option";

const RSIForm = (props) => {
  const [condition, setCondition] = useState(["lower than", "higher than"]);
  const [tm, setTimeFrame] = useState([
    "1m",
    "5m",
    "30m",
    "1h",
    "4h",
    "1d",
    "1w",
    "1M",
  ]);
  const [rsi, setRSI] = useState("");

  const getSelectUserInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    props.getSelectUserInput(id, value);
  };

  return (
    <div className="d-flex flex-wrap">
      <ButtonGroup
        list={condition}
        lables={"condition"}
        id={"condition"}
        getSelectUserInput={getSelectUserInput}
      />
      <input id="rsi" onChange={(e) => setTimeFrame(e.target.value)} />
      <SelectOption
        list={tm}
        lables={"timeframe"}
        id={"timeframe"}
        getSelectUserInput={getSelectUserInput}
      />
    </div>
  );
};

export default RSIForm;
