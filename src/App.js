
import React,{useState,useRef,useEffect} from 'react';
import './App.css';
import EventCard from './event_card';
import ActionCard from './action_card';
import DefaultEventCard from './defaul_event_card';

function App() {
  const divRref = useRef(null);
  const[conditions,setConditions] = useState([]);
  const[events,setEvents] = useState([]);
  const[actions,setActions] = useState([]);


  useEffect(() => {
    divRref.current.scrollIntoView({ behavior: 'smooth' });
  }, [conditions,events,actions]);


  const addEvent =(e)=>{
 
    setConditions([...conditions,
      {
      id:conditions.length+1, 
      e:1,a:0,
      events:events,
      actions:actions
      }])

  }

  const addAction =(e)=>{
 
    //check if the last object is an event
    if(conditions[conditions.length-1].e===1){
      setConditions([...conditions,
        {
        id:conditions.length+1, 
        e:0,a:1,
        events:events,
        actions:actions
        }])
    }


  }
  return (
    <div style={{"textAlign":"center"}}>
      
    <DefaultEventCard/>
    <div>
      {
      conditions.map((condition,index)=>{
        
          if(condition.e===1){
            return <EventCard key={index} condition={condition}/>
          }else if(condition.a===1){
            return  <ActionCard key={index} condition={condition}/>
          }
      })
      }
      </div>
      <div style={{"position": "relative","top":"50%"}}  ref={divRref} className="btn-group" role="group" aria-label="Basic mixed styles example">
      <button  type="button" className="btn btn-warning"
       onClick={(e) => {addEvent(e)}}>Add Event</button>
      <button  type="button" className="btn btn-success" 
      onClick={(e) => {addAction(e)}}>Add Action</button>
    </div>
    </div>
  );
}

export default App;
