import Church from "./components/Church";
import Community from "./components/Community";
import CSR from "./components/CSR";
import Footer from "./components/Footer";
import Foundation from "./components/Foundation";
import Hero from "./components/Hero";
import Interns from "./components/Interns";
import Navbar from "./components/Navbar";
import Training from "./components/Training";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <h1 className="mt-12 px-4 text-center text-[30px] font-semibold md:mt-20 md:text-[40px]">
        Types of Partnership
      </h1>
      <Training />
      <CSR />
      <Interns />
      <Church />
      <Community />
      <Foundation />

      <Footer />
    </section>
  );
}
