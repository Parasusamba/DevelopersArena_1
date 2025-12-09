import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Award, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutTeam from "@/assets/about-team.jpg";

const values = [
  { icon: Award, text: "Excellence in every project we deliver" },
  { icon: Target, text: "Results-driven approach to problem solving" },
  { icon: Heart, text: "Client-centric focus and lasting partnerships" },
];

const AboutPreview = () => {
  return (
    <section className="section-padding bg-background" aria-labelledby="about-preview-heading">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={aboutTeam}
                alt="NexusCore team collaborating in modern office"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute -bottom-8 -right-4 lg:-right-8 bg-card rounded-xl p-6 shadow-lg border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Award className="w-8 h-8 text-secondary" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">15+</div>
                  <div className="text-muted-foreground text-sm">Years of Excellence</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <div
              className="absolute -z-10 -top-4 -left-4 w-full h-full border-2 border-secondary/20 rounded-2xl"
              aria-hidden="true"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              About NexusCore
            </span>
            <h2
              id="about-preview-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6"
            >
              Building Tomorrow's{" "}
              <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Since 2008, NexusCore has been at the forefront of business
              transformation. We combine deep industry expertise with innovative
              thinking to help organizations navigate complexity and achieve
              exceptional results.
            </p>

            {/* Values List */}
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-secondary" aria-hidden="true" />
                  </div>
                  <span className="text-foreground font-medium">{value.text}</span>
                </motion.div>
              ))}
            </div>

            <Link to="/about">
              <Button variant="default" size="lg" className="group">
                Discover Our Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
