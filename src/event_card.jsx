
import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import SelectOption from './select_option';
import InputField from './input_field';

const EventCard =()=> {

    const [coins,setCoins]=useState(["BTC","ETH","BNB"]);
    const [starategy,setStrategy]=useState(["Price","Volume","RSI"]);
    const [condition,setCondition]=useState(["Deacreased by","Increased By"]);
    const [percent,setPercent]=useState(["%","USDT","BTC"]);
    const [timeFrame,setTiemFrame]=useState(["1m","3m","30m","1h","4h","1d","1w","1M"]);


    const [selectedPrice,setSelectedPrice]=useState(false);
    const [selectedVolume,setSelectedVolume]=useState(false);
    const [selectedRsi,setSelectedRsi]=useState(false);
  

 const getSelectUserInput=(e)=>{
     const id = e.target.id;
     const value = e.target.value

    if(id==="strategy"){
        if(value==="Price"){
            setSelectedPrice(true);
            setSelectedVolume(false);
        }
         else if(value==="Volume"){
            setSelectedVolume(true);
            setSelectedPrice(false);
        }
        
    }else{
        setSelectedPrice(false);
        setSelectedVolume(false);
    }
  
 }
  
        return (
            <div>
                <div className="card text-center alert alert-warning">
                <div className="card-header">
                Featured
                </div>
                <div className="card-body">
                <div className="card-title">
                    <SelectOption 
                    list={coins} 
                    id={"coin"} 
                    lables="Coin"
                    getSelectUserInput={getSelectUserInput}/>
                    </div>
                    <div className="card-title">
                    <SelectOption 
                    list={starategy} 
                    lables={"Strategy"}
                    id={"strategy"} 
                    getSelectUserInput={getSelectUserInput}/>
                    </div>
                    {
                    selectedPrice? 
                    <>
                    <div className="card-title">
                    <SelectOption
                     list={condition} 
                     lables={"Condition"}
                     id={"condition"} 
                    getSelectUserInput={getSelectUserInput}/>
                    </div>
                    <InputField list={percent}/>
                    <div className="card-title">
                    <SelectOption
                    lables={"Time Frame"}
                     list={timeFrame} 
                     id={"timeFrame"} 
                    getSelectUserInput={getSelectUserInput}/>
                    </div>
                    </>
                    :null
                    }
                    
                </div>
                </div>
            </div>
        );
 
}

export default EventCard;