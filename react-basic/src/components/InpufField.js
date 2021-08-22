import React from 'react';

const InpufField = ({
    type,value,placeholder,onChange,errorMessage
}) => {
  return (
    <React.Fragment>
        <input
        style={{borderColor:'gray'}}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
         />
      <div style={{color:'red'}}>{errorMessage}</div>
    </React.Fragment>
  );
};

export default InpufField;