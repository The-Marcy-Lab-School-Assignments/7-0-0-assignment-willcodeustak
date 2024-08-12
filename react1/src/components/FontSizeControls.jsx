import { useState } from 'react'

function FontSizeControls({ onDecrease, onIncrease }) {//Component1
  return (
    <section>
      <button onClick={onDecrease}>-</button>
      <button onClick={onIncrease}>+</button>
    </section>
  )
}

export default FontSizeControls