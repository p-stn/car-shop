"use client"
import { Icon } from '@/components/Icons/Icon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr';

export default function Page() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error, isLoading } = useSWR("/api/article?limit=6", fetcher, { revalidateOnFocus: false });

    return (
        <main>
            <section className='h-[405px] w-full bg-cover bg-no-repeat bg-center flex justify-center items-center bg-[url(/contact.png)] -translate-y-[100px]'>
                <div className='flex flex-col gap-1 justify-center items-center'>
                    <h3 className='text-secondary'>مقالات</h3>
                    <p className='flex flex-row gap-1 items-center text-white'> <Link href="/">اتورنت</Link> <span>مقالات</span></p>
                </div>
            </section>
            <section className='container mx-auto flex flex-row'>
                <div className='w-[calc(100%-392px)] h-[400px] flex flex-wrap flex-row gap-[25px]'>
                    {data?.map((e) => (
                        <Link key={e.id} href={`/blog/${e.id}`} className='w-[350] h-[390px] rounded-2xl border border-gray-2 bg-white flex flex-col p-4 gap-4'>
                            <div className="w-full h-[195px] rounded-xl">
                                <Image src={e.imageUrl} width={195} height={195} alt={e.title} className="w-full h-[195px] rounded-xl" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className='font-bold text-[16px] text-black'>{e.title}</p>
                                <p className="line-clamp-2">{e.content}</p>
                                <div className="flex flex-row gap-4">
                                    <p className="flex flex-row gap-1">3دقیقه <Icon name="clock" /></p>
                                    <p className="flex flex-row gap-1">1,213  <Icon name="eye" /></p>

                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className='w-[395px] flex flex-col gap-6'>
                    <div className='relative'>
                        <input type="text" placeholder='جستجو در مقالات' className='w-full outline-none h-14 bg-white p-4 rounded-[14px] ' />
                        <button className='absolute top-5 left-3'>
                            <Icon name="searchBlog" />
                        </button>
                    </div>

                    <div className='w-full bg-white py-6 px-[18px] rounded-[14px] flex flex-col gap-4'>
                        <div>
                            <h4 className='w-[15%] text-gray-11 pb-2.5 text-nowrap border-b-[3px] border-b-secondary'>آخرین مقالات</h4>
                        </div>
                        <div className='flex flex-col gap-3'>
                            {data?.map((e) => (
                                <div key={e.id} className='flex flex-row gap-3.5 w-full h-[105px] border-b border-b-gray-3 px-2 py-2.5'>
                                    <div className='w-[83px] h-[83px] rounded-lg'>
                                        <Image src={e.imageUrl} width={83} height={83} alt="/" className="w-full h-full rounded-lg" />

                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <p className='text-[16px] text-gray-9'>{e.title}</p>
                                        <div className='flex flex-row gap-4'>
                                            <span className='flex flex-row gap-2 items-center text-gray-6'>
                                                <Icon name="clock" />
                                                3دقیقه
                                            </span>
                                            <span className='flex flex-row gap-2 items-center text-gray-6'>
                                                <Icon name="eye" />
                                                21,597
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>

                    <div className='w-full bg-white py-6 px-[18px] rounded-[14px] flex flex-col gap-4'>
                        <div>
                            <h4 className='w-[15%] text-gray-11 pb-2.5 text-nowrap border-b-[3px] border-b-secondary'>آخرین مقالات</h4>
                        </div>
                        <div className='flex flex-wrap flex-row gap-4'>
                            <Link href="" className='w-auto px-4 py-2 bg-gray-1 text-[12px] text-gray-9 rounded-[48px]'>
                                اجاره خودرو
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
