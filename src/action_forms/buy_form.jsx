
import React,{ useState, useEffect } from 'react';
import InputField from '../fields/input_field';
import SelectOption from '../fields/select_option';

const BuyForm = (props) => {
const [coins,setCoins]=useState(["BTC","ETH","BNB"]);
const [tm,setOrderType]=useState(["1m","5m","30m","1h","4h","1d","1w","1M"]);
const [percent,setPercent]=useState(["%","USDT","BTC"]);



const getSelectUserInput=(e)=>{
    props.getDataFromSubForm(e)

}

const getUserInputField=(e)=>{
    props.getDataFromSubForm(e)
}

    return (
        <div className="d-flex flex-wrap">
            <SelectOption 
                    list={coins} 
                    lables={"coin"}
                    id={"coin"} 
                    getSelectUserInput={getSelectUserInput}/>

              <InputField 
              getUserInputField={getUserInputField}
              id={"order_input"}
              list={percent}  />

              <SelectOption 
                    list={tm} 
                    lables={"timeframe"}
                    id={"timeframe"} 
                    getSelectUserInput={getSelectUserInput}/>
                
        </div>
    );
};

export default BuyForm;