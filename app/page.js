import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <>
      <main>
        <section className="min-h-screen">
          <Navbar />
          <HeroSection />
        </section>
      </main>
    </>
  );
}
