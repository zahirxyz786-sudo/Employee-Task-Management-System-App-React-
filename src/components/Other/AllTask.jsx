import React, { useContext } from 'react'
import { contextApi } from '../../context/AuthContext'

const AllTask = () => {

const [userData, setUserData] = useContext(contextApi)


    return (
        <div>

            <div className='flex flex-col gap-2 overflow-auto px-5 py-3 '>

                <div className='flex justify-between py-3 px-15 bg-amber-700 items-center text-xl font-bold rounded'>
                    <h2>Employee</h2>
                    <h2>New Task</h2>
                    <h3>Active Task</h3>
                    <h5>Completed</h5>
                    <h5>Failed</h5>
                </div>
            </div>

            <div id='cards' className='h-80 flex flex-col gap-2 overflow-auto px-5 py-3 '>

                {userData.map(function (elem, idx) {
                    return <div key={idx} className='border-2 flex justify-between py-3 px-15 h-20 items-center text-2xl font-bold rounded'>
                        <h2 className='text-white w-[1vw]'>{elem.firstName}</h2>
                        <h2 className='text-yellow-500 w-[1vw]'>{elem.taskCounts.newTask}</h2>
                        <h3 className='text-blue-500 w-[1vw]'>{elem.taskCounts.active}</h3>
                        <h5 className='text-green-500 w-[1vw]'>{elem.taskCounts.completed}</h5>
                        <h5 className='text-red-500 w-[1vw]'>{elem.taskCounts.failed}</h5>
                    </div>
                })}

            </div>
        </div>
    )
}

export default AllTask