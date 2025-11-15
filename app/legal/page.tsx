export default function Page() {
    return (
        <main>
            <section className='container mx-auto flex flex-col gap-6'>
                <div className='bg-white rounded-2xl border flex gap-4 flex-col border-gray-2 p-6 mt-6'>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-black'>مدارک لازم</h4>
                        <span className='flex w-full h-px bg-gray-2 relative'>
                            <span className='absolute top-[-1.5px] rounded-full w-10 h-[3px] bg-secondary'></span>
                        </span>
                    </div>
                    <div>
                        <ul className='list-disc px-6 [&>li]:text-gray-11 [&>li]:text-[14px] [&>li]:mb-3'>
                            <li>ارائه گواهینامه رانندگی با اعتبار حداقل 6 ماه</li>
                            <li>ارائه کارت ملی</li>
                            <li>مدارک شغلی (هرگونه مدرکی که نشان دهنده شغل یا محل کار شما باشد)</li>
                            <li>ارائه سفته (به ارزش خودرو برای ماشین‌های ایرانی و ارائه چک به ارزش خودرو برای ماشین‌های خارجی)</li>
                            <li>پرداخت ضمانت نقدی که بسته به مدل خودرو متفاوت است.</li>

                        </ul>
                    </div>
                </div>
                <div className='bg-white rounded-2xl border flex gap-4 flex-col border-gray-2 p-6'>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-black'>مدارک لازم برای اجاره خودرو افراد خارجی</h4>
                        <span className='flex w-full h-px bg-gray-2 relative'>
                            <span className='absolute top-[-1.5px] rounded-full w-10 h-[3px] bg-secondary'></span>
                        </span>
                    </div>
                    <div>
                        <ul className='list-disc px-6 [&>li]:text-gray-11 [&>li]:text-[14px] [&>li]:mb-3'>
                            <li>کپی از گواهینامه رانندگی کشور محل سکونت و یا گواهینامه بین‌المللی فرد</li>
                            <li>کپی از پاسپورت برای خودروهای اقتصادی و اصل پاسپورت برای خودروهای لوکس</li>
                            <li>ارائه بلیط برای تحویل خودرو در فرودگاه امام</li>
                            <li>پرداخت ضمانت نقدی که بسته به مدل خودرو متفاوت است.</li>
                        </ul>
                    </div>
                </div>
                <div className='bg-white rounded-2xl border flex gap-4 flex-col border-gray-2 p-6'>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-black'>مدارک اجاره خودرو برای شرکت‌ها</h4>
                        <span className='flex w-full h-px bg-gray-2 relative'>
                            <span className='absolute top-[-1.5px] rounded-full w-10 h-[3px] bg-secondary'></span>
                        </span>
                    </div>
                    <div>
                        <ul className='list-disc px-6 [&>li]:text-gray-11 [&>li]:text-[14px] [&>li]:mb-3'>
                            <li>مدرک شناسایی مدیر شرکت</li>
                            <li>ارائه اساسنامه شرکت</li>
                            <li>دریافت چک شرکت</li>
                            <li>پرداخت ضمانت نقدی که بسته به مدل خودرو متفاوت است.</li>
                        </ul>
                    </div>
                </div>
                <div className='bg-white rounded-2xl border flex gap-4 flex-col border-gray-2 p-6'>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-black'>انواع بیمه برای انواع خودرو</h4>
                        <span className='flex w-full h-px bg-gray-2 relative'>
                            <span className='absolute top-[-1.5px] rounded-full w-10 h-[3px] bg-secondary'></span>
                        </span>
                    </div>
                    <div>
                        <p className='text-[14px] text-gray-11'>شرکت اتورنت برای منطبق شدن با نیازهای مختلف مشتریان دو نوع بیمه پایه و بیمه کامل را برای اجاره خودرو ارائه می‌دهد. هر کدام از این بیمه‌ها باتوجه‌به بوجه و نیاز مشتری، هزینه خسارات را پوشش می‌دهند. بیمه پایه اجاره خودرو در این نوع بیمه که بصورت پیش فرض بر روی تمامی خودروهای اجاره شده دراتورنت وجود دارد، در این نوع بیمه مسئولیت تمامی خسارات و زیان‌ها بر عهده اجاره کننده است.</p>
                    </div>
                </div>
                <div className='flex flex-row gap-7'>
                    <div className='w-[50%] bg-white rounded-2xl border flex gap-4 flex-col border-gray-2 p-6'>
                        <div className='flex flex-col gap-1'>
                            <h4 className='text-black'>بیمه پایه</h4>
                            <span className='flex w-full h-px bg-gray-2 relative'>
                                <span className='absolute top-[-1.5px] rounded-full w-10 h-[3px] bg-secondary'></span>
                            </span>
                        </div>
                        <div>
                            <ul className='list-disc px-6 [&>li]:text-gray-11 [&>li]:text-[14px] [&>li]:mb-3'>
                                <li>امداد جاده‌ای بصورت گسترده (ERA)</li>
                                <li>ایمنی خودرو (SSP)</li>
                                <li>پوشش کامل در برابر سرقت</li>
                                <li>بیمه شخص ثالث (ALI) مبلغ بیمه پایه بصورت رایگان و روزانه است.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-[50%] bg-white rounded-2xl border flex gap-4 flex-col border-gray-2 p-6'>
                        <div className='flex flex-col gap-1'>
                            <h4 className='text-black'>بیمه کامل</h4>
                            <span className='flex w-full h-px bg-gray-2 relative'>
                                <span className='absolute top-[-1.5px] rounded-full w-10 h-[3px] bg-secondary'></span>
                            </span>
                        </div>
                        <div>
                            <ul className='list-disc px-6 [&>li]:text-gray-11 [&>li]:text-[14px] [&>li]:mb-3'>
                                <li>امداد جاده‌ای گسترده (ERA)</li>
                                <li>بیمه شخص ثالث (ALI)</li>
                                <li>تعهد ایمنی خودرو (SSP)</li>
                                <li>پوشش کامل ناشی از سرقت</li>
                                <li>پرداخت خسارات جزئی (شیشه، لاستیک، بدنه)</li>
                                <li>بیمه بدنه با حداقل مسئولیت (LDW)</li>
                                <li>حداقل معافیت جهت افت قیمت مبلغ بیمه کامل بصورت روزانه حدود 35% کرایه خودرو است.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    )
}
