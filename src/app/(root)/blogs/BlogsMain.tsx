"use client";
import React, { useState } from "react";
import { articles } from "./constants/constants";
import Container from "@/components/atoms/Container";
import Blog from "@/components/atoms/Blog";

const BlogsMain = () => {
  const [showMore, setShowMore] = useState(false);

  const handleLoadMore = () => {
    setShowMore(true);
  };

  const displayedArticles = articles.slice(0, 9);

  const additionalArticles = articles.slice(9);

  return (
    <Container className=" p-4 sm:p-8 md:p-12 lg:p-16 rounded-xl">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3  sm:gap-5">
        {displayedArticles.map((article, index) => (
          <Blog blogData={article} key={index} />
        ))}
        {showMore &&
          additionalArticles.map((article, index) => (
            <Blog blogData={article} key={index} />
          ))}

        {!showMore && (
          <div className="mt-12 text-center col-span-full">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-blue-500 text-white rounded-full font-semibold shadow-md transform transition duration-300 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default BlogsMain;
