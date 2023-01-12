'use client';
import React, { use } from 'react'
import { useRouter } from "next/navigation";
import { getCompleted } from './page';

let cancel = false;

async function getActivities() {
  return await (await fetch("https://www.boredapi.com/api/activity/")).json()
}

async function setCompleted(a: any, isComplete: Boolean) {
  const datas = await getCompleted()
  const activity = a.activity
  const key = a.key
  console.log(datas)
  if (!isComplete && datas.includes(false)) {
    cancel = true
    return;
  }
  await fetch('http://127.0.0.1:8090/api/collections/activities/records', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      key,
      activity,
      isComplete
    }),
  });
}

function Generate() {
  const router = useRouter();
  const a = use(getActivities())
  return (
     <div className='p-16 flex flex-col justify-center items-center gap-5'>
        <div className='font-bold text-black'>{a.activity}</div>
      <form className='flex space-x-2 space-y-2 flex-wrap justify-center items-baseline'>
        <button type="submit" onClick={() => {
          event?.preventDefault();
          router.refresh();
        }} className='rounded-xl px-4 py-2 bg-blue-500 text-md text-blue-100 hover:bg-blue-600 duration-300'>Generate</button>
        <button type='submit' onClick={() => {
          setCompleted(a, false);
          event?.preventDefault();
          if (cancel) {
            alert("Finish current activity to do another")
            cancel = false
          } else {
            router.refresh();
          }
        }} className='rounded-xl px-4 py-2 bg-green-500 text-md text-blue-100 hover:bg-green-600 duration-300'>Do</button>
      </form>
    </div>
  )
}

export default Generate