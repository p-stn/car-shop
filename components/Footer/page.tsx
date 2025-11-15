import React from 'react'
import { Icon } from '../Icons/Icon'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <div className="flex container mx-auto my-[70px] flex-col gap-4 py-[41px] px-[52px] w-full h-auto rounded-2xl bg-[#1e1e1ee9]">
                <div className='w-full flex flex-row justify-around h-[101px] rounded-2xl border border-gray-6 p-4'>
                    <div className='flex flex-row gap-4 items-center'>
                        <div className='w-12 h-12 rounded-xl border border-white flex justify-center items-center'>
                            <Icon name="caling" />
                        </div>
                        <div className='flex flex-col gap-3 text-white'>
                            <p>ارتباط با ما</p>
                            <p>0912-21326545</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 items-center border-r border-r-gray-6 border-l border-l-gray-6 px-[81px]'>
                        <div className='w-12 h-12 rounded-xl border border-white flex justify-center items-center'>
                            <Icon name="sms" />
                        </div>
                        <div className='flex flex-col gap-3 text-white'>
                            <p>ایمیل</p>
                            <p>autorent@info.com</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 items-center'>
                        <div className='w-12 h-12 rounded-xl border border-white flex justify-center items-center'>
                            <Icon name="sms" />
                        </div>
                        <div className='flex flex-col gap-3 text-white'>
                            <p>آدرس</p>
                            <p>تهران- خ شادمان</p>
                        </div>
                    </div>

                </div>
                <div className='flex flex-row justify-between px-10  gap-0'>
                    <div className='flex flex-col gap-6 items-start'>
                        <Link href={"/"}>
                            <Icon name="logo" />
                        </Link>
                        <p className='text-white text-[14px] w-[407px]'>اتورنت با رویکرد اعتماد به مشتری، با در اختیار داشتن بزرگترین ناوگان خودرویی متشکل از انواع خودروهای صفر کیلومتر، اقتصادی تا تجاری در سراسر کشور ایران آماده خدمت‌رسانی به مشتریان است.</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <ul className='text-white text-[14px] flex flex-col gap-5'>
                            <li><Link href={"/"}>دسترسی آسان</Link></li>
                            <li><Link href={"/"}>سوالات متداول</Link></li>
                            <li><Link href={"/"}>تماس با ما</Link></li>
                            <li><Link href={"/"}>درباره ما</Link></li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-4 justify-center'>
                        <p className='text-white'>خبرنامه</p>
                        <div className='w-[320px] h-10 rounded-md border border-gray-4 py-1 px-2 flex flex-row justify-between'>
                            <input type="text" placeholder='ایمیل خود را وارد کنید' className='text-gray-4 outline-none' />
                            <button className='relative text-black bg-secondary w-[66px] h-8 rounded-md'>ارسال</button>
                        </div>
                    </div>
                </div>


                <div className='border-t border-t-gray-6 pt-6'>
                    <p className='text-gray-5 text-center'>تمامی حقوق این وبسایت متعلق به اتورنت می‌باشد</p>

                </div>


            </div>
        </footer>
    )
}
