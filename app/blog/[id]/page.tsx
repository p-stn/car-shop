import { Icon } from '@/components/Icons/Icon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
async function getPost(slug: string) {
  const res = await fetch(`http://localhost:3000/api/article/${slug}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  console.log("params", id);
  const post = await getPost(id);
  console.log(post)
  const { title, content, imageUrl } = post
  return (
    <main>
      <section className='container mx-auto flex flex-row gap-6 mt-14'>
        <div className='w-[calc(100%-386px)] flex flex-col gap-3.5'>
          <h2 className=''>{title}</h2>
          <div className='flex flex-row gap-7'>
            <span className='bg-white p-1 flex flex-row gap-2 rounded-lg'><Icon name="time" />زمان مطالعه: ۵ دقیقه</span>
            <span className='bg-white p-1 flex flex-row gap-2 rounded-lg'><Icon name="calender" /> ۳۰ آذر ۱۴۰۲</span>
          </div>
          <Image src={imageUrl} width={195} height={386} alt="/" className="w-full! rounded-xl" />
          <div className='w-full h-auto py-6 flex flex-col gap-2'>
            <p>{title}</p>
            <p>{content}</p>
          </div>


          <div className='w-full mt-4'>
            <p>نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند *</p>
            <form action="" className='flex flex-col gap-4'>
              <div className='flex flex-col gap-4'>
                <label className='text-[20px]' htmlFor="">دیدگاه شما*</label>
                <textarea placeholder='پیام' className='w-full p-4 h-52 bg-white rounded-lg border border-gray-3 ' name="" id=""></textarea>
              </div>
              <div className='flex flex-col gap-4'>
                <label className='text-[20px]' htmlFor="">نام*</label>
                <input placeholder='نام' className='w-full h-14 p-4 bg-white border border-gray-3 rounded-lg' type="text" />
              </div>
              <div className='flex flex-col gap-4'>
                <label className='text-[20px]' htmlFor="">ایمیل*</label>
                <input placeholder='ایمیل' className='w-full h-14 p-4 bg-white border border-gray-3 rounded-lg' type="text" />
              </div>
              <button type='submit' className='text-white bg-primary w-[155px] h-10 rounded-lg'>ثبت دیدگاه</button>
            </form>
          </div>
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
              <div className='flex flex-row gap-3.5 w-full h-[105px] border-b border-b-gray-3 px-2 py-2.5'>
                <div className='w-[83px] h-[83px] rounded-lg'>
                  <Image src="/network.png" width={83} height={83} alt="/" className="w-full h-full rounded-lg" />

                </div>
                <div className='flex flex-col gap-3'>
                  <p className='text-[16px] text-gray-9'>نگاهی به Lexus NX</p>
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
  );
}
