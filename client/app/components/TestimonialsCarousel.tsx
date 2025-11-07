import React, { useRef, useEffect } from "react";

interface Testimonial {
  text: string;
  by: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  title: string;
}

export default function TestimonialsCarousel({
  testimonials,
  title,
}: TestimonialsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let frame: number;
    let running = true;
    const scrollSpeed = 0.5;
    function animate() {
      if (!running) return;
      if (scrollContainer) scrollContainer.scrollLeft += scrollSpeed;
      if (
        scrollContainer &&
        scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        // Reset to 1 instead of 0 for seamless loop
        scrollContainer.scrollLeft = 1;
      }
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => {
      running = false;
      cancelAnimationFrame(frame);
    };
  }, [testimonials]);

  return (
    <section className="py-16 px-4 bg-linear-to-r from-blue-100 to-indigo-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">
          {title}
        </h2>
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden scroll-smooth"
          style={{
            scrollBehavior: "smooth",
            whiteSpace: "nowrap",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {[...testimonials, ...testimonials, ...testimonials].map(
            (testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 pb-1 shadow text-left inline-block align-top max-w-md"
              >
                <p className="italic mb-2 break-after-auto whitespace-pre-line">
                  {testimonial.text}
                </p>
                <div className="font-semibold text-indigo-600">
                  {testimonial.by}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
