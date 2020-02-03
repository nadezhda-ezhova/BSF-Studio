import React from 'react';

import './index.css';

const Checkbox = ({ id, label, onClick, checked }) => (
  <div className='checkbox'>
    {/*<span>{label}</span>*/}
    <div title={label} class="checkbox-container green">
      <input onClick={onClick} type="checkbox" checked={checked} id={id} />
      <label htmlFor={id}></label>
    </div>
  </div>
);

export default Checkbox;
