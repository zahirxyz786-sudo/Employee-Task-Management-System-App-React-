import Login from './components/Auth/Login'
import EmployeDash from './components/DashBoard/EmployeDash'
import AdminDash from './components/DashBoard/AdminDash'
import { useContext, useEffect, useState } from 'react'
import { contextApi } from './context/AuthContext'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(contextApi)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])


  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == 123) {
      setUser("admin")
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }))
    }
    else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser("employee")
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }))
      }
    }
    else {
      alert("Invalid")
    }
  }


  return (
    <>
      {user == null ? <Login handleLogin={handleLogin} /> : ''}
      {user == "admin" ? <AdminDash changeUser={setUser} /> : (user == "employee" ? <EmployeDash changeUser={setUser} data={loggedInUserData} /> : null)}
      {/* <EmployeDash /> */}
      {/* <AdminDash /> */}
    </>
  )
}

export default App