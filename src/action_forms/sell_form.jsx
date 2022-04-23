
import React,{ useState, useEffect } from 'react';
import InputField from '../input_field';
import SelectOption from '../select_option';

const SellForm = () => {
const [coins,setCoins]=useState(["BTC","ETH","BNB"]);
const [order_type,setOrderType]=useState(["1m","5m","30m","1h","4h","1d","1w","1M"]);
const [percent,setPercent]=useState(["%","USDT","BTC"]);


const getSelectUserInput=(e)=>{
    const id = e.target.id;
    const value = e.target.value

  console.log(value)
 
}
    return (
        <div className="d-flex flex-wrap">
            <SelectOption 
                    list={coins} 
                    lables={"coins"}
                    id={"coins"} 
                    getSelectUserInput={getSelectUserInput}/>

              <InputField list={percent}/>

              <SelectOption 
                    list={order_type} 
                    lables={"order_type"}
                    id={"order_type"} 
                    getSelectUserInput={getSelectUserInput}/>
                
        </div>
    );
};

export default SellForm;