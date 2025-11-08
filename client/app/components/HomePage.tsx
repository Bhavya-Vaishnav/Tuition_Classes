import { Hero } from "./Hero";
import { Features } from "./Features";
import { Testimonials } from "./Testimonials";
import { Footer } from "./Footer";

export function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}
