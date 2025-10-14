// import Header from "@/components/molecules/Header";
// import Footer from "@/components/molecules/Footer";
import BlogArticle from "@/components/molecules/blogs/BlogArticle";
import BlogsMain from "./BlogsMain";
import CTA from "@/components/molecules/blogs/CTA";

function BlogsPage() {
  return (
    <div className="flex flex-col h-full w-full">
      {/* <Header /> */}
      <BlogArticle />
      <BlogsMain />
      <CTA />
      {/* <Footer /> */}
    </div>
  );
}

export default BlogsPage;
