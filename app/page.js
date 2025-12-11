import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MainCardSection from "@/components/MainCardSection";
import StylesSection from "@/components/StylesSection";



export default function Home() {
  return (
    <>
      <main>
        <section className="min-h-screen">
          <HeroSection />
        </section>
        <section className="min-h-screen">
          <MainCardSection />
        </section>
        <section className="min-h-screen max-w-[1600px] mx-auto">
          <StylesSection />
        </section>
        <section className="min-h-screen max-w-[1600px] mx-auto">
          <Footer />
        </section>
      </main>
    </>
  );
}
