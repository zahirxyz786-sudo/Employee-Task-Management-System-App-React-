import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [Email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(Email, password)

        setEmail('')
        setPassword('')
    }

    
    
    return (
        <div className='flex items-center justify-center h-screen w-full'>

            <div className=' border-2 border-green-200 rounded-2xl h-180 w-100 py-10 px-10'>

                <h1 className='text-3xl font-bold '>Login</h1>


                <form onSubmit={(e) => {
                    submitHandler(e)
                }}
                    className='flex flex-col mt-[25vh] gap-5'>

                    <input onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                        value={Email}
                        required className='border-2 border-green-500 h-10 rounded-full px-5 outline-none' type="email" placeholder='Email' />

                    <input onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                        value={password}
                        required className='border-2 border-green-500 h-10 rounded-full px-5 outline-none' type='password' placeholder='Password' />

                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2'>
                            <input type="checkbox" name="subscribe" />
                            <span>Remember</span>
                        </div>
                        <h2 className='text-red-500'>Forget Pasword </h2>
                    </div>

                    <div className='flex justify-center items-center bg-green-500 mt-10 h-10 rounded-full'>
                        <button>Login</button>
                    </div>
                    
                </form>


            </div>

        </div>
    )
}

export default Login