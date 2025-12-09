import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-muted" aria-labelledby="cta-heading">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-primary rounded-3xl overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <svg className="w-full h-full" viewBox="0 0 400 400">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Decorative Circles */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/5 rounded-full blur-3xl" aria-hidden="true" />

          <div className="relative px-8 py-16 lg:px-16 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <h2
                  id="cta-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-card mb-6"
                >
                  Ready to Transform
                  <span className="block text-gradient">Your Business?</span>
                </h2>
                <p className="text-card/70 text-lg leading-relaxed mb-8 max-w-lg">
                  Let's discuss how NexusCore can help you achieve your goals.
                  Schedule a free consultation with our experts today.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button variant="hero" size="lg" className="group">
                      Schedule Consultation
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>
                  </Link>
                  <a href="tel:+1234567890">
                    <Button variant="heroOutline" size="lg">
                      <Phone className="w-5 h-5" aria-hidden="true" />
                      Call Us Now
                    </Button>
                  </a>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="tel:+1234567890"
                  className="bg-card/5 backdrop-blur-sm border border-card/10 rounded-xl p-6 hover:bg-card/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Phone className="w-6 h-6 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="text-card font-semibold mb-1">Call Us</h3>
                  <p className="text-secondary font-medium">+1 (234) 567-890</p>
                </a>
                <a
                  href="mailto:hello@nexuscore.com"
                  className="bg-card/5 backdrop-blur-sm border border-card/10 rounded-xl p-6 hover:bg-card/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Mail className="w-6 h-6 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="text-card font-semibold mb-1">Email Us</h3>
                  <p className="text-secondary font-medium">hello@nexuscore.com</p>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
