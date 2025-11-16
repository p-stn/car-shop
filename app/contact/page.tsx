"use client"
import { Icon } from '@/components/Icons/Icon';
import fetcher from '@/lib/fetcher';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import useSWR from "swr";

export default function Contact() {
    const { data, error, isLoading } = useSWR("/api/contact-us", fetcher, { revalidateOnFocus: false });
    return (
        <main>
            <section className='h-[405px] w-full bg-cover bg-no-repeat bg-center flex justify-center items-center bg-[url(/contact.png)] -translate-y-[100px]'>
                <div className='flex flex-col gap-1 justify-center items-center'>
                    <h3 className='text-secondary'>تماس با ما</h3>
                    <p className='flex flex-row gap-1 items-center text-white'> <Link href="/">اتورنت</Link> <span>تماس با ما</span></p>

                </div>
            </section>
            <section className='container mx-auto w-full h-[400px] bg-white rounded-2xl border border-gray-2 p-8 flex flex-row justify-between'>
                <div className='flex flex-col gap-10'>
                    <p className='text-2xl text-gray-9 border-b border-b-gray-9 pb-4'>ارتباط با دفتر مرکزی اتورنت</p>
                    <div className='flex flex-col gap-8'>
                        {
                            data?.filter((e) => e.id !== 4)
                                .map((e) => (
                                    <div key={e.id} className='flex flex-row items-center gap-1'>
                                        <Icon name="location" />
                                        <span className='text-gray-9 text-[20px]'>{e.question}</span>: <span className='text-gray-6 text-[20px]'>{e.answer}</span>
                                    </div>
                                ))
                        }
                    </div>
                </div>
                <div>
                    <Link href="">
                        {
                            data?.filter((e) => e.id == 4).map((e) => (
                                <Image key={e.id} src={e.answer} width={330} height={330} alt={e.question} className="rounded-sm" />
                            ))
                        }
                    </Link>
                </div>
            </section>
            <section className='container mt-[120px] mx-auto w-full h-[400px] bg-white rounded-2xl border border-gray-2 p-8 flex flex-row justify-between'>
                <div className='w-full flex flex-col gap-[74px]'>
                    <p className='text-2xl w-[30%] text-gray-9 border-b border-b-gray-9 pb-4'>ارسال پیام شما به مجموعه اتورنت</p>

                    <div className=''>
                        <form action="" className='w-full flex px-6 flex-row justify-around'>
                            <div className='flex flex-col gap-6'>
                                <div className='flex flex-col relative'>
                                    <label className='text-[14px] absolute px-1.5 bg-white right-3 top-[-15px] text-gray-4' htmlFor="name">نام و نام خانوادگی</label>
                                    <input id='name' className='w-[533px]  h-12 rounded-md border border-gray-4' type="text" />
                                </div>
                                <div className='flex flex-col relative'>
                                    <label className='text-[14px] absolute px-1.5 bg-white right-3 top-[-15px] text-gray-4' htmlFor="email">پست الکترونیکی</label>
                                    <input id='email' className='w-[533px]  h-12 rounded-md border border-gray-4' type="text" />
                                </div>
                                <div className='flex flex-col relative'>
                                    <label className='text-[14px] absolute px-1.5 bg-white right-3 top-[-15px] text-gray-4' htmlFor="phone">شماره تماس</label>
                                    <input id='phone' className='w-[533px]  h-12 rounded-md border border-gray-4' type="text" />
                                </div>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <div className='flex flex-col relative'>
                                    <label className='text-[14px] absolute px-1.5 bg-white right-3 top-[-15px] text-gray-4' htmlFor="phone">شماره تماس</label>
                                    <textarea name="" className='w-[533px] h-[136px] rounded-md border border-gray-4' id=""></textarea>
                                </div>
                                <button type='submit' className='w-[533px] h-10 bg-primary text-white rounded-md flex justify-center items-center'>ارسال</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}
