import { About } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InstagramCta } from "@/components/InstagramCta";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <InstagramCta />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
