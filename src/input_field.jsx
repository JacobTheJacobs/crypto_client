
import React,{ useState, useEffect } from 'react';


const InputField = (props) => {

  const [user_input, setUserInput] = useState([]);
  const [selected, setSelected] = useState("");


  const getUserOptions = (e) => {
    console.log(e.target.id)
    setSelected(e.target.innerText);
    props.getUserInputField(e);
}

const setUserInputFromField =(e)=>{
  setUserInput(e.target.value);
}

    return (
        <div className="input-group mb-3">
        <input type="text" className="form-control" 
        aria-label="Text input with dropdown button"
        onChange={(e)=>{
          setUserInputFromField(e)}}/>
        <button className="btn btn-outline-secondary
         dropdown-toggle" type="button" 
         data-bs-toggle="dropdown" aria-expanded="false" />
        <ul className="dropdown-menu dropdown-menu-end">
        {props.list.map((coin)=>{
         return <li 
          onClick={(e)=>{getUserOptions(e)}}
          key={coin} value={coin} innertext={coin}>
           <a className="dropdown-item" 
           id={coin}>{coin}</a>
         </li>
    })}
  </ul>
</div>
    );
};

export default InputField;