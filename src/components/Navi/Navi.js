import React from 'react'
import {ThemeSwitcher} from '../../components'
import { MainContext, useContext } from '../../context'
import './Navi.scss'

function Navi() {
  const {theme} = useContext(MainContext)
  return (
    <div>Navi Component
      <ThemeSwitcher />
      <div>Durum = {theme}</div>
    </div>
  )
}

export default Navi