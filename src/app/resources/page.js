import EnterPrise from "../../components/molecules/resources/Enterprise";
import Industries from "../../components/molecules/resources/Industries";
import LandingPage from "../../components/molecules/resources/LandingPage";
import Platform from '../../components/molecules/resources/Platform';
import Brands from "@/components/molecules/home/Brands";
import Header from "../../components/molecules/Header";
import Footer from "../../components/molecules/Footer"
function ResourcePage () {
    return (
        <>
        <Header />
        <LandingPage />
        <EnterPrise />
        <Industries />
        <Platform />
        <Brands className="mt-4 mb-4" />
        <Footer />
        </>
    )
}

export default ResourcePage;