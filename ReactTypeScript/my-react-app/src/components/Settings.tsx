import React, { FC } from 'react'
import { TabProps } from '../interfaces/ProjectTypes'

const Settings: FC<TabProps> = ({ userData, setUserData }) => {

  const HandleRadioButtonChange = (e: React.ChangeEvent<HTMLInputElement>): void => {

    setUserData((prev) => {
      return {
        ...prev, settings: e.target.name as 'dark' | 'light'
      }

    })
  }


  return (
    <div className='ComponentDiv'>
      <h1>Choose Your Theme</h1>
      <label className='labelInt'>
        Dark : <input type='radio' name='dark' checked={userData.settings == 'dark'} onChange={(e) => HandleRadioButtonChange(e)} ></input>

      </label>

      <label className='labelInt'>
        Light : <input type='radio' name='light' checked={userData.settings == 'light'} onChange={(e) => HandleRadioButtonChange(e)} ></input>

      </label>
    </div>
  )
}

export default Settings