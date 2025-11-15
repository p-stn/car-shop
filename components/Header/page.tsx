"use client"
import Link from 'next/link'
import { Icon } from '../Icons/Icon'

export default function Header() {
    const openSearch = (() => {
        console.log("OK")
    })
    return (
        <div className='relative z-50 container mx-auto'>
            <div className='w-full h-24 flex flex-row justify-between bg-white px-8 py-5 rounded-br-2xl rounded-bl-2xl' >
                <div className='flex justify-center items-center'>
                    <Link href={"/"}>
                        <Icon name="logoh" />
                    </Link>
                </div>
                <div className='flex justify-center items-center'>
                    <ul className='flex items-center flex-row gap-10'>
                        {/* <li><Link href="/">رزرو خودرو</Link></li> */}
                        <li><Link href={"/legal"}>خدمات ما</Link></li>
                        <li><Link href={"/blog"}>بلاگ</Link></li>
                        <li><Link href={"/faq"}>سوالات متداول</Link></li>
                        <li><Link href={"/about-us"}>درباره ما</Link></li>
                        <li><Link href={"/contact"}>تماس با ما</Link></li>
                        <li><button onClick={() => openSearch()} className='flex justify-center items-center'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.9005 3.53711C6.82681 3.53711 3.52441 6.8395 3.52441 10.9132C3.52441 14.9869 6.82681 18.2893 10.9005 18.2893C14.9742 18.2893 18.2766 14.9869 18.2766 10.9132C18.2766 6.8395 14.9742 3.53711 10.9005 3.53711ZM2.02441 10.9132C2.02441 6.01108 5.99838 2.03711 10.9005 2.03711C15.8027 2.03711 19.7766 6.01108 19.7766 10.9132C19.7766 15.8153 15.8027 19.7893 10.9005 19.7893C5.99838 19.7893 2.02441 15.8153 2.02441 10.9132Z" fill="#5C5F61" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.2289 20.6022L16.0828 17.4564C15.7899 17.1635 15.7899 16.6887 16.0828 16.3957C16.3756 16.1028 16.8505 16.1028 17.1434 16.3957L20.2896 19.5415C20.5825 19.8344 20.5825 20.3093 20.2896 20.6022C19.9967 20.8951 19.5219 20.8951 19.2289 20.6022Z" fill="#5C5F61" />
                        </svg>
                        </button></li>
                    </ul>
                </div>
                <div className='flex justify-center items-center'>
                    <Link className='w-[122px] text-nowrap bg-primary text-white py-2 px-4 h-10 rounded-lg' href={"/login"}>
                        ورود / ثبت‌نام
                    </Link>
                </div>

            </div>
        </div>
    )
}
