'use client';
import React from 'react'
import PocketBase from 'pocketbase';
import { useRouter } from 'next/navigation';

function Buttons(props: { id: string; key: string, activity: string }) {
    const router = useRouter();
    const pb = new PocketBase('http://127.0.0.1:8090');
    return (
      <>
            <button onClick={async () => {
                event?.preventDefault();
                await pb.collection('activities').update(props.id, {"key": props.key, "activity": props.activity, "completed": true});
                router.refresh()
            }} className='py-1 px-1 text-sm rounded-lg text-white hover:text-lg duration-300'>✔</button>
            <button onClick={async () => {
                event?.preventDefault();
                await pb.collection('activities').delete(props.id);
                router.refresh()
          }} className='py-1 px-1 text-sm rounded-lg text-white hover:text-lg duration-300'>❌</button>
      </>
  )
}

export default Buttons