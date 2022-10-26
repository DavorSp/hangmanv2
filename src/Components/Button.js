import React from "react";


function Button({ value,handleClick }) {


  return (
    <div>
      <button
      onClick={handleClick}
      value={value}>
      {value}

      </button>
    </div>
  );
}

export default Button;
