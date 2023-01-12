import React from 'react'
import dynamic from 'next/dynamic';
const Generate = dynamic(
    async () => (await import('./generate')),
    { ssr: false }
);

export const getCompleted = async () => {
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
    <div className='flex flex-col justify-center items-center w-full'>
      <Generate />
      <div>
        <div className='inline-flex items-center justify-between w-full'>
          <h1 className='text-2xl font-bold'>In Progress</h1>
          <h5 className='text-md'> {datas?.map((data) => {
            if (!data.completed) {
              return (
                <div>
                  {data.activity}
                <button className='py-1 px-2 text-sm rounded-lg text-white'>✔</button>
              </div>
                )
            }
          })}
          </h5>
        </div>
        <h1 className='text-2xl font-bold pt-6'>Completed</h1>
        <div className='pt-6 flex flex-col justify-center items-start gap-3'>
          {datas?.map((data) => {
              if (data.completed) {
                return <Activity key={data.id} a={data} />;
              }
          })}
        </div>
      </div>
    </div>
  )
}

export default page