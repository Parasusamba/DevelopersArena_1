import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, TechVentures Inc.",
    content:
      "NexusCore transformed our approach to market expansion. Their strategic insights helped us achieve 150% growth in just 18 months. An invaluable partnership.",
    rating: 5,
    avatar: "SM",
  },
  {
    id: 2,
    name: "James Rodriguez",
    role: "Founder, GreenStart",
    content:
      "Working with NexusCore was a game-changer. Their team understood our vision from day one and delivered solutions that exceeded every expectation.",
    rating: 5,
    avatar: "JR",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "COO, GlobalRetail",
    content:
      "The digital transformation strategy NexusCore developed for us has revolutionized our operations. We've seen a 40% increase in efficiency across all departments.",
    rating: 5,
    avatar: "EC",
  },
  {
    id: 4,
    name: "Michael Foster",
    role: "Director, InnovateCorp",
    content:
      "Exceptional service and remarkable results. NexusCore's expertise in risk management saved us from potential losses and positioned us for sustainable growth.",
    rating: 5,
    avatar: "MF",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % testimonials.length;
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section
      className="section-padding bg-primary overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Client Testimonials
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-card mt-3"
          >
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative min-h-[320px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "tween", duration: 0.4 }}
                className="absolute inset-0"
              >
                <article className="bg-card/5 backdrop-blur-sm border border-card/10 rounded-2xl p-8 lg:p-12">
                  {/* Quote Icon */}
                  <Quote
                    className="w-12 h-12 text-secondary/30 mb-6"
                    aria-hidden="true"
                  />

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6" role="img" aria-label={`${testimonials[currentIndex].rating} out of 5 stars`}>
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-secondary fill-secondary"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl lg:text-2xl text-card font-medium leading-relaxed mb-8">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author */}
                  <footer className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-lg"
                      aria-hidden="true"
                    >
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <cite className="text-card font-semibold not-italic text-lg">
                        {testimonials[currentIndex].name}
                      </cite>
                      <p className="text-card/60">{testimonials[currentIndex].role}</p>
                    </div>
                  </footer>
                </article>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => navigate(-1)}
              className="w-12 h-12 rounded-full bg-card/10 hover:bg-secondary flex items-center justify-center text-card hover:text-primary transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2" role="tablist">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-secondary"
                      : "bg-card/30 hover:bg-card/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-selected={index === currentIndex}
                  role="tab"
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="w-12 h-12 rounded-full bg-card/10 hover:bg-secondary flex items-center justify-center text-card hover:text-primary transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
