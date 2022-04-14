
import React,{ useState, useEffect } from 'react';
import SelectOption from '../select_option';

const WaitForm = () => {
const [loop,setLoop]=useState(["for","once","every"]);
const [tm,setTimeFrame]=useState(["1m","5m","30m","1h","4h","1d","1w","1M"]);


const getSelectUserInput=(e)=>{
    const id = e.target.id;
    const value = e.target.value

  console.log(value)
 
}
    return (
        <div className="d-flex flex-wrap">
              <SelectOption 
                    list={loop} 
                    lables={"loop"}
                    id={"loop"} 
                    getSelectUserInput={getSelectUserInput}/>
                <SelectOption 
                    list={tm} 
                    lables={"timeframe"}
                    id={"timeframe"} 
                    getSelectUserInput={getSelectUserInput}/>
        </div>
    );
};

export default WaitForm;