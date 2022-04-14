import React,{ useState, useEffect } from 'react';
import InputField from '../input_field';
import SelectOption from '../select_option';


const VolumeForm = () => {
    const [condition,setCondition]=useState([
        "lower than","higher than",
        "cross above","cross below"
    ]);
    const [tm,setTimeFrame]=useState(["1m","5m","30m","1h","4h","1d","1w","1M"]);
    const [percent,setPercent]=useState(["%","USDT","BTC"]);
    const [crossSelect,setCrossSelect]=useState(false)

    const getSelectUserInput=(e)=>{
        const id = e.target.id;
        const value = e.target.value

        if(id === "condition"){
            if(value === "cross above" || value === "cross below"){
                setCrossSelect(true)
            }else{
                setCrossSelect(false)
            }
        }
      console.log(value)
    }


    const getUserInputField=(e)=>{
        const id = e.target.id;
        const value = e.target.innerText;
    }


    return (
        <div className="d-flex flex-wrap">
            <SelectOption
                    list={condition} 
                    lables={"condition"}
                    id={"condition"} 
                    getSelectUserInput={getSelectUserInput}/>

              <InputField list={percent} 
              getUserInputField={getUserInputField}/>

            {crossSelect ? <SelectOption 
                    list={tm} 
                    lables={"timeframe"}
                    id={"timeframe"} 
                    getSelectUserInput={getSelectUserInput}/> : null}
        </div>
    );
};

export default VolumeForm;