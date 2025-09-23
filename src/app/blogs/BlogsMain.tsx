"use client"
import React, { useState } from 'react';

const articles = [
  {
    image: '/images/blogs/unsplash_Nv-vx3kUR2A.jpg',
    date: 'February 18, 2025',
    title: 'Top 4 Use Cases for an AI Phone Assistant in 2025 (DE)',
    readTime: 'Now In 7 Min Read',
    imageAlt: 'AI assistant with European Union stars',
  },
  {
    image: '/images/blogs/unsplash_Nv-vx3kUR2A-1.jpg',
    date: 'February 18, 2025',
    title: 'Automated lead qualification made easy: How the AI...',
    readTime: 'Now In 7 Min Read',
    imageAlt: 'Abstract shapes representing automated processes',
  },
  {
    image: '/images/blogs/unsplash_Nv-vx3kUR2A-2.jpg',
    date: 'February 18, 2025',
    title: 'AI call centers for businesses: A real opportunity or just hype?',
    readTime: 'Now In 7 Min Read',
    imageAlt: 'Person with a headset and AI icon',
  },
  {
    image: '/images/blogs/unsplash_Nv-vx3kUR2A-3.jpg',
    date: 'February 18, 2025',
    title: 'Top 11 AI Phone Assistants for German-Speaking Companies...',
    readTime: 'Now In 7 Min Read',
    imageAlt: 'Grid of various AI phone assistant logos',
  },
  {
    image: '/images/blogs/unsplash_Nv-vx3kUR2A-4.jpg',
    date: 'February 18, 2025',
    title: 'AI Phone - The perfect pilot project for your company in ...',
    readTime: 'Now In 7 Min Read',
    imageAlt: 'Person holding a phone with an AI chat on screen',
  },
  {
    image: '/images/blogs/unsplash_Nv-vx3kUR2A-5.jpg',
    date: 'February 18, 2025',
    title: 'fonio vs. fluently - The 2 AI phone assistants from Austria....',
    readTime: 'Now In 7 Min Read',
    imageAlt: 'Comparison of two different AI assistants',
  },
  {
    image: '/images/blogs/unsplash_Nv-vx3kUR2A-6.jpg',
    date: 'February 18, 2025',
    title: 'AI Phone Assistants: The 4 Best Use Cases for Businesses...',
    readTime: 'Now In 7 Min Read',
    imageAlt: 'Phone with AI application icons',
  },
  {
    image: '/images/blogs/unsplash_Nv-vx3kUR2A-7.jpg',
    date: 'February 18, 2025',
    title: 'Top 4 Use Cases for an AI Phone Assistant in 2025 (DE)',
    readTime: 'Now In 7 Min Read',
    imageAlt: 'AI assistants on a server',
  },
  {
    image: '/images/blogs/unsplash_Nv-vx3kUR2A-8.jpg',
    date: 'February 18, 2025',
    title: 'Top 4 Use Cases for an AI Phone Assistant in 2025 (DE)',
    readTime: 'Now In 7 Min Read',
    imageAlt: 'Cloud with a lock icon',
  },
  {
    image: '/images/blogs/unsplash_Nv-vx3kUR2A-9.jpg',
    date: 'February 18, 2025',
    title: 'Top 4 Use Cases for an AI Phone Assistant in 2025 (DE)',
    readTime: 'Now In 7 Min Read',
    imageAlt: 'Person using a laptop with a screen full of data',
  },
  {
    image: '/images/blogs/unsplash_Nv-vx3kUR2A-10.jpg',
    date: 'February 18, 2025',
    title: 'Top 4 Use Cases for an AI Phone Assistant in 2025 (DE)',
    readTime: 'Now In 7 Min Read',
    imageAlt: 'Person in front of a box with "Fragile" written on it',
  },
  {
    image: '/images/blogs/unsplash_Nv-vx3kUR2A-11.jpg',
    date: 'February 18, 2025',
    title: 'Top 4 Use Cases for an AI Phone Assistant in 2025 (DE)',
    readTime: 'Now In 7 Min Read',
    imageAlt: 'Person building a block tower with other people',
  },
];

const BlogsMain = () => {
  const [showMore, setShowMore] = useState(false);

  const handleLoadMore = () => {
    setShowMore(true);
  };
  
  const displayedArticles = articles.slice(0, 9);
  
  const additionalArticles = articles.slice(9);

  return (
    <div className="bg-white p-4 sm:p-8 md:p-12 lg:p-16 rounded-xl shadow-lg m-4 sm:m-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {displayedArticles.map((article, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <img 
              src={article.image} 
              alt={article.imageAlt}
              className="w-full h-70 object-cover"
            />
            <div className="p-4 flex flex-col items-start">
              <span className="text-gray-600 text-xs font-semibold uppercase">{article.date}</span>
              <h3 className="mt-2 text-base sm:text-lg font-semibold text-gray-900 leading-snug">{article.title}</h3>
              <p className="mt-4 text-sm text-blue-600 font-semibold underline">{article.readTime}</p>
            </div>
          </div>
        ))}
        {showMore && additionalArticles.map((article, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <img 
              src={article.image} 
              alt={article.imageAlt}
              className="w-full h-70 object-cover"
            />
            <div className="p-4 flex flex-col items-start">
              <span className="text-gray-600 text-xs font-semibold uppercase">{article.date}</span>
              <h3 className="mt-2 text-base sm:text-lg font-semibold text-gray-900 leading-snug">{article.title}</h3>
              <p className="mt-4 text-sm text-blue-600 font-semibold underline">{article.readTime}</p>
            </div>
          </div>
        ))}
      </div>
      {!showMore && (
        <div className="mt-12 text-center">
          <button 
            onClick={handleLoadMore}
            className="px-8 py-3 bg-blue-500 text-white rounded-full font-semibold shadow-md transform transition duration-300 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogsMain;
