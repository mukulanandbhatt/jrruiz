import Link from "next/link";
import Image from "next/image";
import { generateSlug } from "@/utils/helper";

export type TBlogProps = {
  blogData: {
    // image: string;
    // imageAlt: string;
    date: string;
    title: string;
    readTime: string;
    type: string;
    image: string;
  };
};
export default function Blog({ blogData }: TBlogProps) {
  return (
    <Link
      href={`/blogs/${generateSlug(blogData.title)}`}
      className="px-2 pt-2 pb-4 border rounded-2xl  shadow-[3px_1px_6px_0px_rgba(0,_0,_0,_0.15)] overflow-hidden transform transition duration-300 hover:scale-[1.01] hover:shadow-xl cursor-pointer"
    >
      <Image
        src={blogData?.image}
        alt={blogData?.title}
        className="w-full h-70 object-cover rounded-2xl border"
        width={500}
        height={500}
      />
      <div className="p-4 flex flex-col items-start">
        <span className="text-gray-600 text-xs font-semibold uppercase">
          {blogData?.date}
        </span>
        <h3 className="mt-2 text-base sm:text-lg font-semibold text-gray-900 leading-snug">
          {blogData?.title}
        </h3>
        <p className="mt-4 text-sm text-blue-600 font-semibold underline">
          {blogData?.readTime}
        </p>
      </div>
    </Link>
  );
}
