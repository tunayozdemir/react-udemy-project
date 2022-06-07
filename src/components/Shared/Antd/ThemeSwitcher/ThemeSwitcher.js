import React from 'react'
import { MainContext, useContext } from '../../../../context'
import { Switch } from 'antd';

import 'antd/dist/antd.min.css';

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(MainContext)

  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Switch
      onClick={() => switchTheme()}
      checkedChildren='ligth'
      unCheckedChildren='dark'
      defaultChecked
    />
  )
}

export default ThemeSwitcher