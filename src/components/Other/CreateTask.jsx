import React, { useContext, useState } from 'react'
import { contextApi } from '../../context/AuthContext';

const CreateTask = () => {

    const [userData, setUserData] = useContext(contextApi)

    const [tasktitle, setTasktitle] = useState('');
    const [taskDate, setTaskDate] = useState('')
    const [Asign, setAsign] = useState('');
    const [category, setcategory] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const [newTasks, setNewTasks] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTasks({ tasktitle, taskDate, Asign, category, taskDescription, active: false, newTask: true, failed: false, completed: false })

        const data = userData
        

        data.forEach(function (elem) {
            if (Asign == elem.firstName) {
                elem.tasks.push(newTasks)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })

        setUserData(data)
        console.log(userData)

        setTasktitle('')
        setTaskDate('')
        setAsign('')
        setcategory('')
        setTaskDescription('')
    }

    return (
        <form className='text-white h-100 p-10 bg-[rgb(65,64,64)] my-5 mx-10 flex gap-50 rounded-2xl'>
            <div className='flex flex-col gap-5 items-center'>
                <div>
                    <h3>Task Title</h3>
                    <input onChange={(input) => {
                        setTasktitle(input.target.value)

                    }}
                        value={tasktitle}
                        className='border border-white rounded h-10 w-180 px-2 outline-none' type="text" id="title" placeholder='Make A Ui Design' />
                </div>

                <div>
                    <h3>Date</h3>
                    <input onChange={(input) => {
                        setTaskDate(input.target.value)
                    }}
                        value={taskDate}
                        className='border border-white rounded h-10 w-180 px-2 outline-none' type="date" id="title" />
                </div>

                <div>
                    <h3>Asign to</h3>
                    <input onChange={(input) => {
                        setAsign(input.target.value)
                    }}
                        value={Asign}
                        className='border border-white rounded h-10 w-180 px-2 outline-none' type="text" id="title" placeholder='employee name' />
                </div>

                <div>
                    <h3>Category</h3>
                    <input onChange={(input) => {
                        setcategory(input.target.value)
                    }}
                        value={category}
                        className='border border-white rounded h-10 w-180 px-2 outline-none' type="text" id="title" placeholder='design, dev, etc' />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <textarea onChange={(input) => {
                    setTaskDescription(input.target.value)
                }}
                    value={taskDescription}
                    className='border border-white h-[90%] w-[42vw] rounded p-5' placeholder='Enter Details here'></textarea>
                <button onClick={(e) => {
                    submitHandler(e)
                }}
                    className='bg-green-500 mt-5 w-full h-10 rounded text-xl font-bold'>Submit</button>
            </div>
        </form>
    )
}

export default CreateTask