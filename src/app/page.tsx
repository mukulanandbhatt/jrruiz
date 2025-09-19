import Image from "next/image";
import Header from "../components/molecules/Header";
import Footer from "../components/molecules/Footer";
import HomePage from "../components/molecules/home/HomePage";
import LandingPage from '../components/molecules/resources/LandingPage'

export default function Home() {
  return (
    <>
    <Header />
    <HomePage />
    <Footer />
    </>
  );
}
