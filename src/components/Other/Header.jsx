import React, { useState } from 'react'
import { setLocalStorage } from '../../utlis/LocalStorage'

const Header = (props) => {

  const [username, setUsername] = useState(null)

  // if(data == null){
  //   setUsername("Admin")
  // }
  // else{
  //   setUsername(data.data.firstName)
  // }

  const LogOut = ()=>{
    localStorage.setItem('loggedInUser', '')
    props.changeUser(null)
  }

  return (
    <div className='py-7 px-20 bg-gray-500'>
        <div className='flex justify-between items-end'>
            <h1 className='text-xl'>Hello <br /> <span className='text-4xl font-bold'>username👋</span></h1>
            <button onClick={LogOut}
            className='bg-red-500 py-2 px-6 rounded-full'>Log Out</button>
        </div>
    </div>
  )
}

export default Header