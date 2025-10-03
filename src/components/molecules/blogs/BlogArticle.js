import React from "react";
import Image from "next/image";

const BlogArticle = () => {
  return (
    <>
    <div id='blogs' class="scroll-mt-20"></div>
    <div className="min-h-screen bg-blue-500 text-white">
      <div className="relative flex flex-col items-center text-center px-4 py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-80 right-50 hidden md:block">
          <Image
            src="/images/HomePage/Computer Vision.png"
            alt="computer vision decoration"
            width={175}
            height={260}
          />
        </div>
        <div className="absolute top-80 left-40 hidden md:block">
          <Image
            src="/images/HomePage/Data Science.png"
            alt="data science decoration"
            width={175}
            height={260}
          />
        </div>
        <div className="absolute top-60 right-5 hidden md:block">
          <Image
            src="/images/HomePage/Star.png"
            alt="star decoration"
            width={70}
            height={70}
          />
        </div>

        <div className="absolute bottom-0 left-40 hidden md:block">
          <Image
            src="/images/ResourcesPage/Frame 2121453665.svg"
            alt="wave decoration"
            width={300}
            height={500}
            opacity={75}
          />
        </div>
        <img
          className="absolute left-1/3 transform w-[300px] sm:w-[700px] lg:w-[900px] h-auto"
          src="/images/ResourcesPage/Vector 7.svg"
          alt="Decorative Wave"
        />

        <div className="z-10 mt-30">
          <h1 className="text-2xl md:text-5xl sm:text-3xl lg:text-6xl font-bold max-w-4xl leading-tight">
            Blog article
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-center text-white mx-auto">
            In our blog section you will find inspiration, insights and current <br/> topics related to telephone AI & communication.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default BlogArticle;
