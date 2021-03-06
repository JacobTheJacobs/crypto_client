
import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import SelectOption from './select_option';
import InputField from './input_field';
import PriceForm from './event_form/price_form';
import VolumeForm from './event_form/value_form';

const EventCard =(props)=> {

    const [coins,setCoins]=useState(["BTC","ETH","BNB"]);
    const [starategy,setStrategy]=useState(["Price","Volume","RSI"]);
    const [condition,setCondition]=useState(["Deacreased by","Increased By"]);
    const [percent,setPercent]=useState(["%","USDT","BTC"]);
    const [timeFrame,setTiemFrame]=useState(["1m","3m","30m","1h","4h","1d","1w","1M"]);
    const [or_and,setOrAnd]=useState(["AND","OR"]);

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
    }
 }
  
        return (
            <div>
                <div className="card text-center alert alert-warning">
                
                
                {props.noAndOr?null:<SelectOption 
                    list={or_and} 
                    lables={"or_and"}
                    id={"or_and"} 
                    getSelectUserInput={getSelectUserInput}/>}
                

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
                    
                    {selectedPrice? <PriceForm/>:null}
                    {selectedVolume? <VolumeForm/>:null}
                </div>
                </div>
            </div>
        );
 
}

export default EventCard;