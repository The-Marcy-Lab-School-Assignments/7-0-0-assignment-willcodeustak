import { useState } from 'react'


function LanguageSelector({ onLanguageChange }) {//Component3
  return (
    <section>
      <button onCLick={() => onLanguageChange('Good Morning')}>English</button>
      <button onClick={() => onLanguageChange('中文早安')}>Chinese</button>
      <button onClick={() => onLanguageChange('안녕하세요')}>Korean</button>
      <button onClick={() => onLanguageChange('Buenos Días')}>Spanish</button>
      <button onClick={() => onLanguageChange('Guten Morgen')}>German</button>
    </section >
  )
}

export default LanguageSelector