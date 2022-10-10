import React from "react";

export default function Display({className, value}) {
  return (
    <div className={className}>{value}</div>
  )
}