import React from 'react'

const CompleteTask = ({data}) => {
    return (
        <div className='bg-purple-400 w-100 h-100 rounded-2xl shrink-0 px-10'>
            <div className='flex gap-5 justify-between items-start mt-5'>
                <h1 className='bg-red-500 text-white px-3 rounded'>{data.category}</h1>
                <h2>{data.taskDate}</h2>
            </div>
            <div className='flex flex-col justify-around items-start h-[70%]'>
                <h1 className='text-3xl font-bold'>{data.taskTitle}</h1>
                <p className='text-xl'>{data.taskDescription}</p>
            </div>
            <div className='flex justify-between py-4'>
                <button className='bg-green-500 py-1 px-3 rounded'>Mark As Completed</button>
                <button className='bg-red-500 py-1 px-3 rounded'>Mark As Failed</button>
            </div>
        </div>
    )
}

export default CompleteTask