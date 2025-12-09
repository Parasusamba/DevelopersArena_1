import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Lightbulb, Users, BarChart3, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: TrendingUp,
    title: "Business Strategy",
    description: "Develop comprehensive strategies that align with your vision and drive sustainable growth.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Lightbulb,
    title: "Innovation Consulting",
    description: "Transform ideas into actionable solutions with our creative innovation framework.",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
  },
  {
    icon: Users,
    title: "Team Development",
    description: "Build high-performing teams through leadership training and organizational design.",
    color: "text-amber-300",
    bgColor: "bg-amber-300/10",
  },
  {
    icon: BarChart3,
    title: "Market Analysis",
    description: "Gain competitive insights with data-driven market research and analytics.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Modernize operations with cutting-edge technology and digital solutions.",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Protect your business with proactive risk assessment and mitigation strategies.",
    color: "text-amber-300",
    bgColor: "bg-amber-300/10",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-muted" aria-labelledby="services-heading">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Comprehensive Solutions for{" "}
            <span className="text-gradient">Modern Business</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From strategy to execution, we provide end-to-end services that
            transform challenges into opportunities.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated p-8 group cursor-pointer"
            >
              <div
                className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className={`w-7 h-7 ${service.color}`} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex items-center text-secondary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button variant="default" size="lg">
              Explore All Services
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
