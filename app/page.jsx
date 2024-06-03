import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import Features from "@/components/Features";
import Advantages from "@/components/Advantages";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Questions from "@/components/Questions";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="mt-16">
        <Features />
      </div>
      <Advantages />
      <Pricing />
      <div className="mt-16">
        <Testimonials />
      </div>
      <Questions />
      <div className="mt-16">
        <Download />
      </div>
      <Footer />
    </>
  )
}

export default page