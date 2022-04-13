
import React,{useState} from 'react';
import './App.css';
import EventCard from './event_card';

function App() {

  const[conditions,setConditions] = useState([]);
  const[events,setEvents] = useState([]);
  const[actions,setActions] = useState([]);




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
 
    setConditions([...conditions,
      {
      id:conditions.length+1, 
      e:0,a:1,
      events:events,
      actions:actions
      }])

  }
  return (
    <div >
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
      <button  type="button" className="btn btn-warning"
       onClick={(e) => {addEvent(e)}}>Add Event</button>
      <button  type="button" className="btn btn-success" 
      onClick={(e) => {addAction(e)}}>Add Action</button>
    </div>
    
      {
      conditions.map((condition,index)=>{
        return <EventCard key={index} condition={condition}/>
      })
      }
      
    </div>
  );
}

export default App;
