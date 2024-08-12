import { useState } from 'react'


function GreetingDisplay({ text, fontSize }) {  //Component2
  return (
    <p style={{ fontSize: fontSize }}>{text}</p>
  )
}

export default GreetingDisplay