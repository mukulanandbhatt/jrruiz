import Image from "next/image";
import React from "react";
import { blogsData } from "../constants/constants";
import Blog from "@/components/atoms/Blog";
import { generateSlug } from "@/utils/helper";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currBlog = blogsData.find((blog) => generateSlug(blog.title) === slug);
  console.log({ blogsData, slug, currBlog });
  return (
    <div className="flex flex-col">
      {/* header SECTION*/}
      <section className="bg-theme pt-5 pb-20 sm:px-10 px-5">
        <div className="mt-[calc(100px+2rem)]  mx-auto max-w-[1200px] ">
          <div className="flex gap-10 md:flex-row flex-col">
            <div className="flex-1">
              <p className="text-lg font-medium text-neutral-200">
                {currBlog?.type}
              </p>
              <h1 className="sm:text-5xl text-4xl font-semibold max-w-md mt-2 text-neutral-100">
                {currBlog?.title}
              </h1>
              <h2 className="sm:text-xl text-lg font-medium text-neutral-200 mt-10">
                Important information: New bank regulations for IBAN
                reconciliation from 9 October 2025
              </h2>
              <div className="gap-4 flex text-neutral-200 font-medium mt-8">
                <p>{currBlog?.date}</p>
                <p>{currBlog?.readTime}</p>
              </div>
            </div>
            <div className="flex-1">
              <Image
                alt="blog images"
                src={"/images/blogs/unsplash_Nv-vx3kUR2A-1.jpg"}
                height={500}
                width={500}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MAIN BLOG */}
      <section className="max-w-[1200px] mx-auto w-full flex-col md:flex-row flex gap-x-10 py-10 sm:px-8 px-5">
        <div className="border-l-2 pl-3 md:w-1/3 h-fit py-2">
          <h6 className="text-lg font-medium">
            In this article, you&#39;ll read:
          </h6>
          {/* SUB HEADING */}
          {currBlog?.subheadings?.map((subHeading, index) => (
            <h2
              key={subHeading}
              className="text-text-secondary text-lg  font-medium mt-3"
            >
              {subHeading}
            </h2>
          ))}
        </div>

        <div className="py-5 md:w-2/3 md:mt-10">
          <h3 className="font-medium text-xl sm:text-2xl">{currBlog?.title}</h3>
          <div
            className="  
            prose prose-lg max-w-none 
        prose-headings:mt-8 prose-headings:mb-4 
        prose-p:my-4 prose-li:my-2 
        prose-ul:ml-6 
        leading-relaxed  text-text-secondary mt-3 font-medium"
            dangerouslySetInnerHTML={{ __html: currBlog?.description || "" }}
          />
          {/* <p className="text-text-secondary mt-3 font-medium">
            Seit dem 9. Oktober 2025 sind alle Banken in Deutschland
            verpflichtet, bei Überweisungen den Empfängernamen mit der IBAN
            abzugleichen. Diese neue EU-Regelung soll dazu beitragen,
            Betrugsfälle und Fehlüberweisungen besser zu verhindern. Aktuell
          </p>
          <p className="mt-5 text-text-secondary font-medium">
            funktioniert dieser automatische Abgleich bei vielen Banken jedoch
            noch nicht ganz reibungslos. Daher kann es vorkommen, dass beim
            Versuch, eine Rechnung zu begleichen, ein Hinweis erscheint wie:
            „Empfänger und IBAN stimmen nicht überein“ oder „Möglicher
            Sicherheitshinweis – bitte prüfen Sie die Angaben.“
          </p> */}
        </div>
      </section>

      {/* YOU MIGHT BE INTERESTED IN: */}

      <section className="pt-10 pb-20 bg-slate-100 w-full sm:px-10 px-5 ">
        <div className="mx-auto max-w-[450px] md:max-w-[1200px]">
          <h6 className="text-2xl font-medium sm:text-3xl max-md:text-center">
            You might also be interested in:
          </h6>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 mt-10">
            {blogsData?.slice(-3).map((blog) => (
              <Blog blogData={blog} key={blog?.title} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
