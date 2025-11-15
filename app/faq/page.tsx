"use client"
import { Icon } from '@/components/Icons/Icon';
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import useSWR from 'swr';
import dataLocal from "./../../public/data/data.json"

export default function Faq() {
    const [openId, setOpenId] = useState<number>(0);
    function openQa(id) {
        setOpenId(prev => (prev === id ? null : id));
    }
    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, error, isLoading } = useSWR("/api/faqs", fetcher, { revalidateOnFocus: false });

    return (
        <main>
            <section className='h-[405px] w-full bg-cover bg-no-repeat bg-center flex justify-center items-center bg-[url(/contact.png)] -translate-y-[100px]'>
                <div className='flex flex-col gap-1 justify-center items-center'>
                    <h3 className='text-secondary'>سوالات متداول</h3>
                    <p className='flex flex-row gap-1 items-center text-white'> <Link href="/">اتورنت</Link> <span>سوالات متداول</span></p>
                </div>
            </section>
            <section className='container mx-auto'>
                <div className="flex flex-row gap-6">
                    <div id="qak" className="w-full flex flex-col gap-4">
                        {data?.map((e: any) => (
                            <div key={e.id} onClick={() => openQa(e.id)} className="w-full h-auto transition px-4 py-6 flex flex-col gap-4 bg-white rounded-2xl border border-gray-2 " >
                                <div className="flex flex-row gap-2">
                                    {openId === e.id ? <Icon name="negativeIcon" /> : <Icon name="plusIcon" />}
                                    <p>{e.questions}</p>
                                </div>
                                <div id="ask" className={`transition-all duration-300 ${openId === e.id ? "" : "hidden"}`}>
                                    <p className="text-gray-7">{e.ask}</p>
                                </div>

                            </div>
                        )
                        )}
                    </div>
                    <div>
                        <Image src="/qa.png" width={400} height={459} alt="qa" className="rounded-2xl" />
                    </div>


                </div>
                <div className="flex flex-row gap-14 w-full h-20 px-6 justify-between my-14 overflow-x-hidden">
                    {dataLocal.logos.map((e) => (
                        <Image key={e.id} src={e.url} width={80} height={80} alt={e.name} className="grayscale" />
                    ))}
                </div>
            </section>
        </main>
    )
}
