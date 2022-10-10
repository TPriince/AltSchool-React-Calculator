import React from "react";

export default function Button({className, name, onClick}) {
  
  return (
    <button className={className} onClick={onClick} name={name} >
      {name}
    </button>
  )
}