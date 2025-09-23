import Header from "../../components/molecules/Header";
import Footer from "../../components/molecules/Footer";
import BlogArticle from '../../components/molecules/blogs/BlogArticle';
import BlogsMain from './BlogsMain';
import CTA from '../../components/molecules/blogs/CTA'

function BlogsPage () {
    return (
        <>
        <Header />
        <BlogArticle />
        <BlogsMain />
        <CTA />
        <Footer />
        </>
    )
}

export default BlogsPage;