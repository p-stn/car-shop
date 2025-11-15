import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='container rounded-2xl mt-14 mx-auto h-[780px] flex justify-center items-end p-[10px] bg-white bg-[url(/404.png)] bg-cover bg-no-repeat'>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <p className='text-center'>صفحه مورد نظر یافت نشد</p>
        <Link className='text-primary border border-primary px-[47px] py-1.5 rounded-lg' href={"/"}>رفتن به صفحه اصلی</Link>
      </div>
    </div>
  )
}
