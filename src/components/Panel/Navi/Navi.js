import React from 'react'
import { ThemeSwitcher } from '../../../components'
// import { MainContext, useContext } from '../../context'
import './Navi.scss'

function Navi() {

  // const { theme } = useContext(MainContext)

  return (
    <div className='navi'>
      <p>Navi Component</p>
      <ThemeSwitcher />
    </div>
  )
}

export default Navi