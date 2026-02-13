import React,{FC} from 'react'

import { TabProps } from '../interfaces/ProjectTypes'

const Profile :FC<TabProps> = ({userData,setUserData}) => {

  const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>,type:string):void=>{

    setUserData((prev)=>({
        ...prev, [type]: e.target.value} ) // Handle other generic types dynamically
    )
  }
  return (
    <div className='ComponentDiv'>
      <label className='labelInt'>
        Name : <input type='text' value={userData.name} onChange={(e)=>handleInputChange(e,'name')}></input>
      </label>

      <label className='labelInt'>
        age : <input type='number'value={userData.age}  onChange={(e)=>handleInputChange(e,'age')}></input>
      </label>

      <label className='labelInt'>
        Email : <input type='Email'value={userData.email} onChange={(e)=>handleInputChange(e,'email')}></input>
      </label>
      </div>
  )
}

export default Profile