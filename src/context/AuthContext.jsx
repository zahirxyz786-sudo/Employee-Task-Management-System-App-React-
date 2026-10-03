import React, { Children, createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utlis/LocalStorage'

export const contextApi = createContext()

const AuthContext = ({ children }) => {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    setLocalStorage()
    const { employees} = getLocalStorage()
    setUserData(employees)
  }, [])


  return (
    <div>
      <contextApi.Provider value={[userData, setUserData]}>
        {children}
      </contextApi.Provider>

    </div>
  )
}

export default AuthContext