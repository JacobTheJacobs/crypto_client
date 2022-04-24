import React, { useState, useEffect } from "react";
import ButtonGroup from "../fields/ButtonGroup";
import InputField from "../fields/input_field";
import SelectOption from "../fields/select_option";

const VolumeForm = (props) => {
  const [coins, setCoins] = useState(["BTC", "ETH", "BNB"]);
  const [starategy, setStrategy] = useState(["Price", "Volume", "RSI"]);
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


  const getSelectUserInput = (e) => {
    props.getDataFromSubForm(e);
  };

  const getUserInputField = (e) => {
    props.getDataFromSubForm(e);
  };

  return (
    <div className="d-flex flex-wrap">
     
    <div className="d-flex flex-wrap">
      <ButtonGroup
        list={condition}
        lables={"condition"}
        lables={"Strategy Condition"}
        id={"strategy_condition"}
        getSelectUserInput={getSelectUserInput}
      />
      value
      <InputField   id={"strategy_input"} list={percent} getUserInputField={getUserInputField} />
    </div>
    </div>
  );
};

export default VolumeForm;
