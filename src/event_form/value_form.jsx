import React, { useState, useEffect } from "react";
import ButtonGroup from "../ButtonGroup";
import InputField from "../input_field";
import SelectOption from "../select_option";

const VolumeForm = () => {
  const [condition, setCondition] = useState([
    "increased by",
    "deacreased by",
    "lower than",
    "higher than",
  ]);
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
  const [percent, setPercent] = useState(["%", "USDT", "BTC"]);
  const [crossSelect, setCrossSelect] = useState(false);

  const getSelectUserInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    if (id === "condition") {
    }
    console.log(value);
  };

  const getUserInputField = (e) => {
    const id = e.target.id;
    const value = e.target.innerText;
  };

  return (
    <div className="d-flex flex-wrap">
      <ButtonGroup
        list={condition}
        lables={"condition"}
        id={"condition"}
        getSelectUserInput={getSelectUserInput}
      />
      value
      <InputField list={percent} getUserInputField={getUserInputField} />
    </div>
  );
};

export default VolumeForm;
