import React, { useState } from 'react';

function State() {
  const [inputs, setInputs] = useState({ input1: '', input2: '' });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <input 
        type="text" 
        name="input2" 
        onChange={handleChange}/>
      <p>Value num 1 :</p>

      <input 
        type="text" 
        name="input2" 
        onChange={handleChange}/>
      <p>Value num 2 : </p>

    </div>
  );
}

export default State;