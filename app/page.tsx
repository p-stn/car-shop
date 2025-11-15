"use client"
import { Icon } from "@/components/Icons/Icon";
import Image from "next/image";
import Link from "next/link";
import dataLocal from "./../public/data/data.json"
import React, { useState } from "react";
import useSWR from "swr";
import { Swiper, SwiperSlide } from 'swiper/react';
import fetcher from "@/lib/fetcher";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Skeleton from "@/components/ui/skeleton";
import ErrorComponent from "@/components/ui/errorComponent";

export default function Home() {
  const [openId, setOpenId] = useState<number>(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const total = 5;
  function openQa(id) {
    setOpenId(prev => (prev === id ? null : id));
  }
  const configFetch = {
    revalidateOnFocus: false,
    errorRetryCount: 3,
    errorRetryInterval: 3000
  }

  const { data: dataCategory, error: errorCategory, isLoading: isLoadingCategory } = useSWR("/api/category", fetcher, configFetch);
  const { data: dataFaqs, error: errorFaqs, isLoading: isLoadingFaqs } = useSWR("/api/faqs", fetcher, configFetch);
  const { data: dataComments, error: errorComments, isLoading: isLoadingComments } = useSWR("/api/comments", fetcher, configFetch);
  const { data: dataArticle, error: errorArticle, isLoading: isLoadingArticle } = useSWR("/api/article?limit=3", fetcher, configFetch);
  return (
    <main>
      <section className="-translate-y-24 bg-[url(/imgbd.png)] h-screen bg-no-repeat bg-cover">
        <div className="container  mx-auto w-full justify-center h-full flex flex-col gap-2">
          <h1 className="text-secondary w-[335px] ">اُتـــو رِنت؛ سریع، آسان و به صرفه</h1>
          <p className="w-[460px] text-white">سرویس دهنده رزرو خودرو در ایران در کمترین زمان ممکن! </p>
        </div>
        <div className="container -translate-y-28 mx-auto bg-white flex justify-between flex-col w-full h-[201px] rounded-2xl p-6">
          <div className="flex flex-row justify-between">
            <div className=" flex flex-row gap-5">
              <button className="py-2 px-3 rounded-[20px] border border-gray-2 bg-white text-black active">اجاره خودرو با راننده</button>
              <button className="py-2 px-3 rounded-[20px] border border-gray-2 bg-white text-black">اجاره خودرو بی راننده</button>
              <button className="py-2 px-3 rounded-[20px] border border-gray-2 bg-white text-black">اجاره ماشین عروس</button>
            </div>
            <Link href={""} className="text-primary text-[14px]">اطلاعات بیشتر در مورد رزرو خودرو</Link>
          </div>
          <div>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="w-[530px] ">
                    <div className="flex gap-1 justify-start">
                      <Icon name="arrowLeft" />
                      محل تحویل خودرو
                    </div>
                  </th>
                  <th className="">
                    <div className="flex gap-1 justify-start">
                      <Icon name="arrowLeft" />
                      تاریخ تحویل
                    </div>
                  </th>
                  <th className="">
                    <div className="flex gap-1 justify-start">
                      <Icon name="arrowLeft" />
                      ساعت تحویل
                    </div>
                  </th>
                  <th className="">
                    <div className="flex gap-1 justify-start">
                      <Icon name="arrowLeft" />
                      تاریخ بازگشت
                    </div>
                  </th>
                  <th className="">
                    <div className="flex gap-1 justify-start">
                      <Icon name="arrowLeft" />
                      ساعت بازگشت
                    </div>
                  </th>
                  <th></th>
                </tr>
              </thead>

              <tbody className="pt-6 h-14">
                <tr>
                  <td className="w-[530px]">
                    <select><option>محل تحویل خودرو</option></select>
                  </td>
                  <td>
                    <select><option>تاریخ تحویل</option></select>
                  </td>
                  <td>
                    <select><option>ساعت تحویل</option></select>
                  </td>
                  <td>
                    <select><option>تاریخ بازگشت</option></select>
                  </td>
                  <td>
                    <select><option>ساعت بازگشت</option></select>
                  </td>
                  <td>
                    <button className="w-14 h-14 rounded-2xl bg-secondary">
                      <Icon name="search" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>


          </div>

        </div>
      </section>
      <section>
        <div className="flex flex-row gap-14 w-full h-20 px-6 justify-between my-14 overflow-x-hidden">
          {dataLocal.logos.map((e) => (
            <Image key={e.id} src={e.url} width={80} height={80} alt={e.name} className="grayscale" />
          ))}
        </div>
        <div className="w-full container mx-auto h-[292px] flex flex-col bg-cover rounded-2xl bg-[url(/imgbd1.png)]">
          <div className="flex flex-col gap-2 text-center justify-center items-center leading-[180%] p-6">
            <h5 className="text-secondary text-[24px]">چــــــرا اُتو رِنت؟</h5>
            <p className="text-white text-[18px] w-[845px] ">اجاره خودرو از یک شرکت اجاره خودرو با سابقه به شما کمک می‌کند تا در مسافرت ها، قرار ملاقات‌ های مهم، مجالس و مراسم‌های خانوادگی ماشین مناسب خود را در اختیار داشته باشید. اگر شما اصلا خودرویی در اختیار ندارید یا خودروی شما مطمئن نیست، می‌توانید از سوییچ، خودروی مناسب خود را کرایه کرده و با آسودگی به سفر بروید.</p>
          </div>

          <div className="flex flex-row justify-center translate-y-8 gap-10 px-[100px]">
            <div className="w-[312px] h-[186px] border border-gray-2 flex flex-col justify-center items-center bg-white rounded-2xl p-6 gap-2">
              <div className="w-[72px] h-[72px] rounded-xl border border-primary-shade-3 flex justify-center p-3 items-center">
                <Icon name="iconbody1" />
              </div>
              <h6 className="">قیمت مناسب</h6>
              <p className="text-center">هدف ما، ارائه بهترین خدمات با مناسب ترین قیمت ممکن است.</p>
            </div>

            <div className="w-[312px] h-[186px] border border-gray-2 flex flex-col justify-center items-center bg-white rounded-2xl p-6 gap-2">
              <div className="w-[72px] h-[72px] rounded-xl border border-primary-shade-3 flex justify-center p-3 items-center">
                <Icon name="iconbody2" />
              </div>
              <h6 className="">پشتیبانی 24 ساعته</h6>
              <p className="text-center">کارشناسان ما در هر زمان و مکان، پاسخگوی سوالات شما خواهند بود.</p>
            </div>

            <div className="w-[312px] h-[186px] border border-gray-2 flex flex-col justify-center items-center bg-white rounded-2xl p-6 gap-2">
              <div className="w-[72px] h-[72px] rounded-xl border border-primary-shade-3 flex justify-center p-3 items-center">
                <Icon name="iconbody3" />
              </div>
              <h6 className="">تحویل در محل</h6>
              <p className="text-center">تحویل خودرو در زمان و مکان تعیین شده توسط شما خواهد بود.</p>
            </div>
          </div>

        </div>

        <div className="w-full container mx-auto flex justify-center flex-row gap-2 mb-12 mt-[150px] ">
          {
            isLoadingCategory ? (
              <div className="flex flex-row justify-center gap-2">
                <Skeleton count={5} id={"loading"} width={238} height={144} />
              </div>
            ) : errorCategory ? (
              <ErrorComponent message="درحال رفع مشکل." />
            ) : (
              dataCategory.map((e) => (
                <div
                  key={e.id}
                  className="group cursor-pointer w-[238px] relative flex flex-col justify-center h-36 rounded-2xl border border-gray-2 pt-2 px-1.5 bg-white"
                >
                  <h4 className="text-center">{e.name}</h4>
                  <Image
                    src={e.url}
                    width={230}
                    height={101}
                    alt={e.name}
                    className="z-40"
                  />
                  <span className="absolute w-52 left-[5%] right-[5%] bottom-0 z-10 h-[5px] bg-secondary rounded-t-lg mx-auto 
           transition-all duration-300 origin-bottom group-hover:h-[30px]"></span>
                </div>
              ))
            )
          }




        </div>
      </section>
      <section className="hidden">
        <div className="w-full container mx-auto flex items-center gap-6 flex-col">
          <div className="flex flex-col items-center gap-2">
            <p>مشاهده موجودی خودروها </p>
            <p className="text-black">رزرو خودرو در  <span className="text-secondary">اُتـــورِنت</span></p>
            <div className="w-full">
              <div className="flex flex-row gap-2">
                <button className="w-32 h-12 border bg-white border-primary rounded-lg text-primary active">اقتصادی</button>
                <button className="w-32 h-12 border bg-white border-primary rounded-lg text-primary">لوکس</button>
                <button className="w-32 h-12 border bg-white border-primary rounded-lg text-primary">پرطرفدار</button>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-6">
            <div className="relative w-[392px] h-[510px] bg-white border border-gray-2 rounded-2xl py-4 px-5">
              <span className="absolute left-[29px] top-[23px] w-8 h-[29px] rounded-lg bg-primary-shade-3 text-white">
              </span>
              <div className="w-full h-[225px] rounded-xl border border-gray-1">
                {/* <Image src="" width={80} height={80} alt="" className="w-full h-full rounded-xl" /> */}
              </div>
              <div className="flex flex-col gap-2">
                <h6>اجاره بنز E350 سدان</h6>
                <p><span>مدل:</span>: <span>2016</span></p>
                <div className="w-full h-11 flex flex-row justify-between p-2 bg-gray-1 rounded-lg">
                  <p className="text-gray-11">از  ۱ تا 30 روز: <span className="text-primary">8,500,000</span></p>
                  <p className="text-gray-9">روزانه</p>
                </div>
                <div className="w-full h-11 flex flex-row justify-between p-2 bg-gray-1 rounded-lg">
                  <p className="text-gray-11">از  ۱ تا 30 روز: <span className="text-primary">8,500,000</span></p>
                  <p className="text-gray-9">روزانه</p>
                </div>
                <span className="flex w-full h-px bg-gray-2 "></span>
                <p className="flex justify-between"><span>مبلغ ضمانت:</span> <span> 80 میلیون تومان</span></p>
                <button className="w-full h-10 bg-primary rounded-lg text-white">درخواست رزرو</button>
              </div>


            </div>

          </div>

        </div>
      </section>

      <section className="w-full mt-12 mb-14 container mx-auto flex items-center gap-6 flex-col">
        <div className="flex flex-col mb-[50px] gap-2">
          <p className="text-center text-gray-8 text-2xl font-normal">چگونه در وبسایت </p>
          <h3 className="text-black"><span className="text-secondary">اُتـــورِنت</span> خودرو رزرو کنیم؟  </h3>
        </div>
        <div className="w-full relative flex flex-col gap-[427px]">
          <Image src="/imgcarb.png" width={392} height={893} alt="imgcarb" className="absolute left-145 right-145" />
          <div className="w-full flex flow-row justify-between">
            <div className="flex flex-row gap-4">
              <div id="itemcar1" className="relative w-20 h-20 bg-white rounded-2xl border border-gray-2 flex justify-center items-center">
                <Icon name="iconcar1" />
              </div>
              <div className="flex flex-col gap-2 w-[270px]">
                <p><span className="text-secondary">خودروی</span> خود را انتخاب کنید.</p>
                <p className="text-gray-8">خودروی مورد نظر خود را، متناسب با درخواست خود انتخاب کنید.</p>
              </div>

            </div>
            <div className="relative flex flex-row gap-4">
              <div className="flex flex-col gap-2 w-[260px]">
                <p><span className="text-secondary">تاریخ</span> تحویل را تعیین کنید.</p>
                <p className="text-gray-8">تاریخ موردنظر خود را از تقویم، انتخاب و رزرو کنید</p>
              </div>
              <div id="itemcar2" className="relative w-20 h-20 bg-white rounded-2xl border border-gray-2 flex justify-center items-center">
                <Icon name="iconcar2" />
              </div>

            </div>
          </div>
          <div className="flex flow-row justify-between">
            <div className="flex flex-row gap-4">
              <div id="itemcar3" className="relative w-20 h-20 bg-white rounded-2xl border border-gray-2 flex justify-center items-center">
                <Icon name="iconcar3" />
              </div>
              <div className="flex flex-col gap-2 w-[267px]">

                <p><span className="text-secondary">هزینه</span> اجاره را پرداخت کنید.</p>
                <p className="text-gray-8">می توانید از طریق کیف پول آنلاین یا کارت های عضو شبکه شتاب هزینه اجاره را پرداخت کنید.</p>
              </div>

            </div>
            <div id="itemcar_p" className="flex flex-row gap-4">
              <div className="flex flex-col gap-2 w-[258px]">
                <p><span className="text-secondary">خودرو</span>را دریافت کنید.</p>
                <p className="text-gray-8">در زمان و مکان تعیین شده، خودروی خود را دریافت کنید..</p>
              </div>

              <div id="itemcar4" className="relative w-20 h-20 bg-white rounded-2xl border border-gray-2 flex justify-center items-center">
                <Icon name="iconcar4" />
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="w-full container mx-auto mt-[350px]">
        <div className="flex flex-col items-center mb-[50px] gap-2">
          <p className="text-gray-9 text-2xl font-normal">پر تکرارترین سؤالاتی که پرسیدید</p>
          <h3 className="text-black"><span className="text-secondary">متداول </span>سؤالات </h3>
        </div>
        <div className="flex flex-row gap-6">
          <div id="qak" className="w-full flex flex-col gap-4">
            {
              isLoadingFaqs ? (
                <Skeleton count={1} id={"loading"} width={600} height={400} />
              ) : errorFaqs ? (
                <ErrorComponent message="خطایی رخ داده! لطفا دوباره تلاش کنید." />
              ) : (
                dataFaqs.map((e: any) => (
                  <div
                    key={e.id}
                    onClick={() => openQa(e.id)}
                    className="w-full h-auto transition px-4 py-6 flex flex-col gap-4 bg-white rounded-2xl border border-gray-2 cursor-pointer"
                  >
                    <div className="flex flex-row gap-2">
                      {openId === e.id ? <Icon name="negativeIcon" /> : <Icon name="plusIcon" />}
                      <p>{e.questions}</p>
                    </div>

                    <div
                      className={`transition-all duration-300 overflow-hidden ${openId === e.id ? "max-h-40" : "max-h-0"
                        }`}
                    >
                      <p className="text-gray-7">{e.ask}</p>
                    </div>
                  </div>
                ))
              )
            }


          </div>
          <div>
            <Image src="/qa.png" width={392} height={459} alt="qa" className="rounded-2xl" />
          </div>


        </div>

      </section>

      <section className="w-full container mx-auto mt-12">
        <div className="flex flex-col items-center mb-[50px] gap-2">
          <p className="text-gray-9 text-2xl font-normal">آنچه مشتریان ما درموردمان گفته‌اند.</p>
          <h3 className="text-black"><span className="text-secondary">مشتریان </span>نظرات</h3>
        </div>
        <>
          <Swiper
            spaceBetween={10}
            navigation={false}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {
              isLoadingComments ? (
                <SwiperSlide>
                  <div className="flex justify-center py-10 text-gray-500"></div>
                </SwiperSlide>
              ) : errorComments ? (
                <SwiperSlide>
                  <ErrorComponent message="خطا" />
                </SwiperSlide>
              ) : (
                dataComments.map((e: any) => (
                  <SwiperSlide key={e.id}>
                    <div className="flex flex-col justify-center items-center gap-1">

                      <div>
                        <Image
                          src={e.avatar}
                          width={136}
                          height={136}
                          alt={e.user_name}
                          className="w-[136px] h-[136px] rounded-full border-primary border-[5px]"
                        />
                      </div>

                      <div className="flex flex-col justify-center items-center">
                        <p className="text-center">{e.user_name}</p>

                        <div id="rating" className="flex flex-row gap-1">
                          {Array.from({ length: total }).map((_, i) =>
                            i < e.rating ? <Icon name="star" key={i} /> : <Icon name="starm" key={i} />
                          )}
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="w-[776px] text-center text-gray-7">
                          {e.comment}
                        </p>
                      </div>

                    </div>
                  </SwiperSlide>
                ))
              )
            }





          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={24}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {
              isLoadingComments ? (
                <SwiperSlide>
                  <div className="flex flex-col items-center gap-3 py-10">
                    <div className="w-16 h-16 bg-gray-200 animate-pulse rounded-full" />
                    <div className="w-24 h-4 bg-gray-200 animate-pulse rounded" />
                    <div className="w-20 h-3 bg-gray-200 animate-pulse rounded" />
                  </div>
                </SwiperSlide>
              ) : errorComments ? (
                <SwiperSlide>
                  <div className="flex justify-center py-10">
                    <p className="">خطا در دریافت کامنت‌ها!</p>
                  </div>
                </SwiperSlide>
              ) : (
                dataComments.map((e: any) => (
                  <SwiperSlide key={e.id} className="flex flex-col items-center gap-2">

                    <div className="w-16 h-16 rounded-full">
                      <Image
                        src={e.avatar}
                        width={64}
                        height={64}
                        alt={e.user_name}
                        className="w-16 h-16 rounded-full"
                      />
                    </div>

                    <div className="flex flex-col gap-1 items-center">
                      <p>{e.user_name}</p>
                      <p className="text-gray-6 text-sm">{e.date}</p>
                    </div>

                  </SwiperSlide>
                ))
              )
            }

          </Swiper>
        </>
      </section>

      <section className="w-full container mx-auto mt-12">
        <div className="flex flex-col items-center mb-[50px] gap-2">
          <p className="w-full text-center text-gray-9 text-2xl font-normal">مقالات ما</p>
          <div className="w-full flex flex-row justify-between">
            <div></div>
            <h3 className="text-black flex flex-row"><span className="text-secondary">خودرو </span>مجله </h3>

            <Link href={"/blog"} className="text-primary text-[14px] flex justify-center items-center flex-row gap-1">مشاهده همه <Icon name="arrowLeftItem" /></Link>
          </div>
        </div>

        <div className="flex flex-row justify-center flex-wrap gap-6">
          {
            isLoadingArticle ? (
                <Skeleton count={4} id={"loading"} width={390} height={390} />

            ) : errorArticle ? (
              <div className="text-center py-10">خطا در دریافت مقالات!</div>
            ) : (
              dataArticle.map((e) => (
                <div
                  key={e.id}
                  className="w-[390px] h-[390px] rounded-2xl border border-gray-2 bg-white flex flex-col p-4 gap-4"
                >
                  <div className="w-full h-[195px] rounded-xl">
                    <Image
                      src={e.imageUrl}
                      width={195}
                      height={195}
                      alt={e.title}
                      className="w-full h-[195px] rounded-xl object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <p className="font-semibold">{e.title}</p>
                    <p className="line-clamp-2 text-gray-700">{e.content}</p>

                    <div className="flex flex-row gap-4 text-gray-600">
                      <p className="flex flex-row gap-1">
                        3 دقیقه <Icon name="clock" />
                      </p>
                      <p className="flex flex-row gap-1">
                        1,213 <Icon name="eye" />
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )
          }


        </div>

      </section>
    </main>
  )
}
