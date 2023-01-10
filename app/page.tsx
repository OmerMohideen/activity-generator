import React from 'react'
import dynamic from 'next/dynamic';
const Generate = dynamic(
    async () => (await import('./generate')),
    { ssr: false }
);

async function getCompleted() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/activities/records?page=1&perPage=30')
    const data = await res.json()
    return data?.items as any[]
}

function Activity({ a }: any) {
  const { activity } = a || {};
  return (
      <h5 className='text-md bg-green-100 py-2 px-2 rounded-lg'>{activity}</h5>
  );
}

async function page() {
  const datas = await getCompleted()
  return (
    <div className='flex flex-col justify-center items-center'>
      <Generate />
      <div>
        {/* <h1 className='text-2xl font-bold'>In Progress</h1> */}

        <h1 className='text-2xl font-bold'>Completed</h1>
        <div className='pt-6 flex flex-col justify-center items-start gap-3'>
            {datas?.map((data) => {
                return <Activity key={data.id} a={data} />;
            })}
        </div>
      </div>
    </div>
  )
}

export default page