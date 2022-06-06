import React from 'react'
import { MainContext, useContext } from '../../context'

function ThemeSwitcher() {
  const {theme, setTheme} = useContext(MainContext)

  const switchTheme = ()=> {
    setTheme(theme === 'light' ? 'dark' :'light')
  }


  return (
    <button onClick={()=>switchTheme()}>Tema Değştir</button>
  )
}

export default ThemeSwitcher