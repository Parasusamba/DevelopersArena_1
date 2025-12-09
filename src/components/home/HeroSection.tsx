import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Team Experts" },
];

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container-wide section-padding relative z-10 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6"
            >
              <Star className="w-4 h-4 text-secondary" aria-hidden="true" />
              <span className="text-secondary text-sm font-medium">
                Trusted by 500+ Companies
              </span>
            </motion.div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-card mb-6 leading-tight"
            >
              Transform Your
              <span className="block text-gradient">Business Vision</span>
              Into Reality
            </h1>

            <p className="text-lg sm:text-xl text-card/70 mb-8 max-w-xl leading-relaxed">
              Partner with NexusCore to unlock innovative strategies, cutting-edge
              solutions, and measurable results that propel your business forward.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Start Your Journey
                  <ArrowRight
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
              <Button variant="heroOutline" size="lg" className="group">
                <Play className="w-5 h-5" aria-hidden="true" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-secondary/20 border-2 border-primary flex items-center justify-center text-secondary text-xs font-bold"
                    aria-hidden="true"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-card/80 text-sm">
                <span className="font-semibold text-secondary">2,500+</span> happy
                clients worldwide
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-card/5 backdrop-blur-sm border border-card/10 rounded-2xl p-6 hover:bg-card/10 transition-colors"
              >
                <div className="text-4xl font-bold text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-card/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card/5 backdrop-blur-sm border border-card/10 rounded-xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-secondary">{stat.value}</div>
              <div className="text-card/70 text-xs">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-card/50"
        aria-hidden="true"
      >
        <div className="w-6 h-10 rounded-full border-2 border-card/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
