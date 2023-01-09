'use client';
import React, { use, useState } from 'react'

async function getActivities() {
  return await (await fetch("https://www.boredapi.com/api/activity/")).json()
}


function Generate() {
 const updateViewport = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log(1)
  };
  const a = use(getActivities())
  return (
     <div className='p-16 flex flex-col justify-center items-center gap-5'>
        <div className='font-bold text-black'>{a.activity}</div>
      <form onSubmit={updateViewport} className='flex space-x-2 space-y-2 flex-wrap justify-center items-baseline'>
        <button type="submit"  className='rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300'>Generate</button>
      </form>
    </div>
  )
}

export default Generate