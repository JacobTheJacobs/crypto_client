import React from 'react';

const InputField = (props) => {

    return (
        <div className="input-group mb-3">
  <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
  <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">%</button>
  <ul className="dropdown-menu dropdown-menu-end">
      {props.list.map((coin)=>{
      return <li key={coin}>
           <a className="dropdown-item" href="#">{coin}</a>
         </li>
    })}
  </ul>
</div>
    );
};

export default InputField;