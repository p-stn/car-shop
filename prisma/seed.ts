import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  await prisma.productCategory.createMany({
    data: [
      { url: "/productCat/1.png", name: "شاسی بلند", order: 1 },
      { url: "/productCat/2.png", name: "کروک", order: 2 },
      { url: "/productCat/3.png", name: "سدان", order: 3 },
      { url: "/productCat/4.png", name: "کوپه", order: 4 },
      { url: "/productCat/5.png", name: "اسپرت", order: 5 },
    ]
  })









  // const user = await prisma.user.upsert({
  //   where: { email: 'pooya9685@gmail.com' },
  //   update: {},
  //   create: { name: 'پویا سعادتیان', email: 'pooya9685@gmail.com' },
  // });
  // await prisma.article.create({
  //   data: {
  //     title: 'روش های مختلف برای اجاره خودرو ',
  //     slug: 'rentalmethodcarss',
  //     content: `
  //     در دنیای امروز، اجاره خودرو یکی از گزینه‌های پرطرفدار برای افرادی است که به دلایل مختلف نمی‌خواهند یا نمی‌توانند خودروی شخصی داشته باشند.
  //     روش‌های اجاره خودرو به طور کلی به سه دسته تقسیم می‌شوند:
  //     ۱. اجاره کوتاه‌مدت برای سفر یا کارهای روزانه.
  //     ۲. اجاره بلندمدت برای شرکت‌ها یا افراد.
  //     ۳. اجاره خودرو با راننده برای مراسم، فرودگاه و جلسات رسمی.

  //     در انتخاب روش مناسب، عواملی مثل بودجه، مدت زمان استفاده و نوع خودرو تأثیر زیادی دارند.
  //   `,
  //     imageUrl: "/blogimg/pic-1.png",
  //     visit:2,
  //     studyTime:4,
  //     author: {
  //       connect: { id: user.id },
  //     },
  //     publishedAt: new Date(),
  //   },
  // });






  // await prisma.brand.delete({
  //   where: {
  //     id: 1,
  //   },
  // });  
  // await prisma.tag.createMany({
  //   data:[
  //       {name:"بدون راننده",slug:"بدون راننده"},
  //       {name:"ون",slug:"ون"},
  //       {name:"مرسدس بنز",slug:"مرسدس بنز"},
  //       {name:"اجاره خودرو",slug:"اجاره خودرو"},            
  //   ]
  // })  

  // const MercedesBenz = await prisma.brand.upsert({
  //   where: { name: 'Peugeot' },
  //   update: {},
  //   create: { name: 'Peugeot', name_fa: "پژو", country: 'France', country_fa: "فرانسه" },
  // })
  // await prisma.brand.createMany({
  //   data: [
  //    { name: 'Lamborghini',   name_fa: 'لامبورگینی',  country: 'Italy', country_fa: 'ایتالیا' },
  //   ],
  // })




  // await prisma.category.delete({
  //   where: { id: 4 }
  // })
  // const images = [
  //   { url: "/productCat/1.png", name: "شاسی بلند", order: 1 },
  //   { url: "/productCat/2.png", name: "کروک", order: 2 },
  //   { url: "/productCat/3.png", name: "سدان", order: 3 },
  //   { url: "/productCat/4.png", name: "کوپه", order: 4 },
  //   { url: "/productCat/5.png", name: "اسپرت", order: 5 },
  // ];

  // for (const img of images) {
  //   await prisma.productCategory.create({ data: img });
  // }
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
