import React from 'react';

import './index.css';

const Checkbox = ({ id, label, onChange, checked }) => (
  <div className='checkbox'>
    {/*<span>{label}</span>*/}
    <div title={label} className="checkbox-container green">
      <input onChange={onChange} type="checkbox" checked={checked} id={id} />
      <label htmlFor={id}></label>
    </div>
  </div>
);

export default Checkbox;
