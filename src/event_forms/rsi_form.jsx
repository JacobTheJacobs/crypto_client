import React, { useState, useEffect } from "react";
import ButtonGroup from "../fields/ButtonGroup";
import InputField from "../fields/input_field";
import SelectOption from "../fields/select_option";

const RSIForm = (props) => {
  const [coins, setCoins] = useState(["BTC", "ETH", "BNB"]);
  const [starategy, setStrategy] = useState(["Price", "Volume", "RSI"]);
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
  const [error,setError]=useState("")


  const getSelectUserInput = (e) => {
    props.getDataFromSubForm(e);
  };

  const getTimeFrame = (e) => {
    if(!isNaN(e.target.value) && isFinite(e.target.value)){
      console.log(e)
      props.getDataFromSubForm(e);
      setError("")
    }else{
      setError("Input Must be number beewtween 100 and 0")
    }
  };


  return (
 <div className="d-flex flex-wrap">
      <ButtonGroup
        list={condition}
        lables={"Strategy Condition"}
        id={"strategy_condition"}
        getSelectUserInput={getSelectUserInput}
      />
      <input id="strategy_input" 
      onChange={(e) => getTimeFrame(e)} />
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
