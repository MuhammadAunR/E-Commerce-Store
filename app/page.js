import HeroSection from "@/components/HeroSection";
import MainCardSection from "@/components/MainCardSection";
import Navbar from "@/components/Navbar";
import StylesSection from "@/components/StylesSection";



export default function Home() {
  return (
    <>
      <main>
        <section className="min-h-screen">
          <Navbar />
          <HeroSection />
        </section>
        <section className="min-h-screen">
          <MainCardSection />
        </section>
        <section className="min-h-screen">
          <StylesSection />
        </section>
      </main>
    </>
  );
}
