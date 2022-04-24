
import React,{ useState, useEffect } from 'react';
import InputField from '../fields/input_field';
import SelectOption from '../fields/select_option';

const SellForm = (props) => {
const [coins,setCoins]=useState(["BTC","ETH","BNB"]);
const [order_type,setOrderType]=useState(["1m","5m","30m","1h","4h","1d","1w","1M"]);
const [percent,setPercent]=useState(["%","USDT","BTC"]);


const getDataFromSubForm=(e)=>{
    props.getDataFromSubForm(e)
}

const getSelectUserInput=(e)=>{
    props.getDataFromSubForm(e)
 
}

const getUserInputField=(e)=>{
    console.log(e)
}
    return (
        <div className="d-flex flex-wrap">
            <SelectOption 
                    list={coins} 
                    lables={"coin"}
                    id={"coin"} 
                    getSelectUserInput={getSelectUserInput}/>

              <InputField list={percent}   id={"order_input"}   getUserInputField={getUserInputField}/>

              <SelectOption 
                    list={order_type} 
                    lables={"order_type"}
                    id={"order_type"} 
                    getSelectUserInput={getSelectUserInput}/>
                
        </div>
    );
};

export default SellForm;