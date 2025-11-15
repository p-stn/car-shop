import { Icon } from '@/components/Icons/Icon'
import Link from 'next/link'
import React from 'react'

export default function About() {
    return (
        <main>
            <section className='h-[405px] w-full bg-cover bg-no-repeat bg-center flex justify-center items-center bg-[url(/contact.png)] -translate-y-[100px]'>
                <div className='flex flex-col gap-1 justify-center items-center'>
                    <h3 className='text-secondary'>درباره ما</h3>
                    <p className='flex flex-row gap-1 items-center text-white'> <Link href="/">اتورنت</Link> <span>درباره ما</span></p>
                </div>
            </section>
            <section className='container mx-auto mb-[100px] flex flex-col gap-6'>
                <div className='bg-white rounded-2xl border flex gap-4 flex-col border-gray-2 p-8'>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-black'>معرفی اتورنت</h4>
                        <span className='flex w-full h-px bg-gray-2 relative'>
                            <span className='absolute top-[-1.5px] rounded-full w-10 h-[3px] bg-secondary'></span>
                        </span>
                    </div>
                    <p className='text-gray-6 text-sm leading-[180%]'>اتورنت  با رویکرد اعتماد به مشتری، در ابتدا با ایجاد بزرگترین ناوگان خودرویی متشکل از انواع خودروهای صفر کیلومتر، اقتصادی تا تجاری در سراسر کشور ایران و در تمامی شهرهای اصلی کشور و تمامی فرودگاه های اصلی و با هدف ارتقاء واقعی خدمات خوب و خدماتی همانندکشورهای پیــــشرفته در مــیهن عزیزمان ایران سرمایه‌گذاری نموده و این مهم با جلب همکاری سایر شرکای تجاری و جذب سرمایه تا رسیدن به هدف ایجاد‌ شبکه ای بالغ بر صد هزار خودرو و گسترش شبکه به کلیه شهرستانهای کوچک ایران ادامه خواهد یافت.مدل تـجاری اتورنت ، با محوریت اعـتماد به مشتری، امـکان اجاره خودرو با استانداردهای روز دنیا و بدون دریافت تضامین سنتی همانند چک و سفته و اسناد ملکی را فراهم می سازد.</p>
                </div>
                <div className='flex flex-row gap-6 justify-center'>
                    <div className='bg-white w-[390px] h-[186px] px-6 py-4 flex flex-col justify-center items-center gap-2 rounded-2xl border border-gray-2'>
                        <div className='w-[72px] h-[72px] flex justify-center items-center rounded-xl border border-primary-shade-3 '>
                            <Icon name="box" />
                        </div>
                        <h6 className='text-'>تحویل در محل</h6>
                        <p className='w-[264px] text-center text-gray-9 text-wrap'>تحویل خودرو در زمان و مکان تعیین شده توسط شما خواهد بود.</p>
                    </div>

                    <div className='bg-white w-[390px] h-[186px] px-6 py-4 flex flex-col justify-center items-center gap-2 rounded-2xl border border-gray-2'>
                        <div className='w-[72px] h-[72px] flex justify-center items-center rounded-xl border border-primary-shade-3 '>
                            <Icon name="num" />
                        </div>
                        <h6 className='text-'>پشتیبانی 24 ساعته</h6>
                        <p className='w-[264px] text-center text-gray-9 text-wrap'>کارشناسان ما در هر زمان و مکان، پاسخگوی سوالات شما خواهند بود.</p>
                    </div>

                    <div className='bg-white w-[390px] h-[186px] px-6 py-4 flex flex-col justify-center items-center gap-2 rounded-2xl border border-gray-2'>
                        <div className='w-[72px] h-[72px] flex justify-center items-center rounded-xl border border-primary-shade-3 '>
                            <Icon name="prc" />
                        </div>
                        <h6 className='text-'>قیمت مناسب</h6>
                        <p className='w-[264px] text-center text-gray-9 text-wrap'>هدف ما، ارائه بهترین خدمات با مناسب ترین قیمت ممکن است.</p>
                    </div>


                </div>
                <div className='bg-white rounded-2xl border flex gap-4 flex-col border-gray-2 p-8'>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-black'>معرفی اتورنت</h4>
                        <span className='flex w-full h-px bg-gray-2 relative'>
                            <span className='absolute top-[-1.5px] rounded-full w-10 h-[3px] bg-secondary'></span>
                        </span>
                    </div>
                    <p className='text-gray-6 text-sm leading-[180%]'>اتورنت دارای شبکه ای شامل ایستگاه های داخل شهری و فرودگاهی می باشد که این ایستگاه ها توسط نمایندگان و شرکای تجاری نگهداری و مدیریت می‌گردند، افرادی که علاقمند به سرمایه‌گذاری و همکاری با ناواران می‌باشند می‌توانند بصورت نمایندگی یا همکار تجاری فعالیت نمایند ، در هر صورت این اشخاص می بایست دوره های آموزش را طبق استاندارد بین‌المللی گذرانده و تحت استاندارد و کیفیت مورد نیاز ناواران شروع به فعالیت نمایند. دارا بودن سرمایه مورد نیاز جهت خرید حداقل تعداد خودروهای صفر کیلومتر در محدوده تحت پوشش و قبل از هرچیز اهمیت به اصل خدمت به هموطنان و رضایت مشتریان از شرایط اصلی اعطای نمایندگی می با نمایندگان دارای اپلیکیشن موبایل و سیستم آنلاین مرتبط با سامانه مدیریت مرکزی می باشند، و تمامی امور رزرو و محاسبات مرتبط بصورت خودکار انجام پذیرفته و نمایندگان از پشتیبانی کامل شرکت مرکزی در تمامی مراحل برخوردار خواهند بود.</p>

                </div>

                        <div className='relative bg-white rounded-2xl border h-[600px] bg-cover bg-no-repeat flex gap-4 flex-col border-gray-2 p-8 bg-[url(/network.png)]'>
                            <div className='absolute top-0 left-0 rounded-2xl h-full w-full bg-[#0c0c0cb1]'></div>
                            <div className='h-full z-50 flex justify-end items-center translate-y-24 gap-4 flex-col'>
                                <h3 className='text-white'>شبکه امدادی و تعمیرات خودرو</h3>
                                <p className='text-white text-center max-w-[900px] w-full text-[14px]'>شبکه تحت پوشش اتورنت که با سرمایه‌گذاری و همکاری شرکای تجاری در خدمت مشتریان قرار گرفته است شامل 2000 نقطه در سراسر کشور ایــران و مناطق آزاد تجاری مـی‌باشد که باعث شده سرعت امداد رسانی در هر نقطه ایران به کمتر از 30 دقیقه کاهش یابد، امدادگران و خودروهای امدادی همگی مجهز به تجهیزات جهت رفع معایب و تعمیرات ساده بوده و بسیاری از مشکلات در همین مرحله به سادگی رفع می گردند.</p>
                                <div className='flex flex-row gap-6 mt-[35px]'>
                                    <div className='w-[490px] h-[142px] flex flex-col justify-center items-center gap-2.5 bg-white rounded-xl border border-gray-3 px-6 py-3'>
                                        <p className='text-black border-b-2 pb-0.5 border-b-secondary w-auto'>خدمات شبانه روزی</p>
                                        <p className='w-full h-[84px] text-gray-11 text-[14px] text-center'>اتورنت در تــمامی بخش‌های اصـلی از جـمله مرکز تماس مشتریان و خدمات امدادی بصورت دائمی تمامی روزهای هفته و 24 ساعته فعال است، بیشتر ایستگاه های کاری تحویل خودرو نیز بصورت 24 ساعته می‌باشند ، فقط واحد اداری و فروش اجاره های بلند مدت در ساعات اداری و روزهای اداری فعال می باشند.</p>
                                    </div>
                                    <div className='w-[490px] h-[142px] flex flex-col justify-center items-center gap-2.5 bg-white rounded-xl border border-gray-3 px-6 py-3'>
                                        <p className='text-black border-b-2 pb-0.5 border-b-secondary w-auto'>ارائه خودرو جایگزین</p>
                                        <p className='w-full h-[84px] text-gray-11 text-[15px] text-center'>با توجه به تعداد خودرو های موجود در اتورنت امکان ارائه خودروی جایگزین در خرابی ها و تعمیرات طولانی مدت که بصورت امدادی برطرف نگردند ، در هر نقطه از ایران میسر می باشد.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
            </section>
        </main>
    )
}
