import React, { FC } from 'react'
import { TabProps } from '../interfaces/ProjectTypes'

const Intrest: FC<TabProps> = ({ userData, setUserData }) => {

  const HandleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const NewArray = userData.intrestArray.includes(e.target.name) ? userData.intrestArray.filter((item) => item != e.target.name) : [...userData.intrestArray, e.target.name]
    setUserData((prev) => (
      { ...prev, intrestArray: NewArray }
    ))
  }

  return (
    <div className='ComponentDiv'>
      <h1>Checked Your Favaourite Selection</h1>

      <label className='labelInt1'>
        <input type='checkbox' checked={userData.intrestArray.includes('Football')} name='Football' onChange={(e) => HandleCheckBoxChange(e)}></input> Football
      </label>

      <label className='labelInt1'>
        <input type='checkbox' checked={userData.intrestArray.includes('Cricket')} name='Cricket' onChange={(e) => HandleCheckBoxChange(e)}></input> Cricket
      </label>

      <label className='labelInt1'>
        <input type='checkbox' checked={userData.intrestArray.includes('Volleyball')} name='Volleyball' onChange={(e) => HandleCheckBoxChange(e)}></input> Volleyball
      </label>

    </div>
  )
}

export default Intrest