import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Lightbulb, Users, BarChart3, Zap, Shield, Globe, Cpu, PieChart, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: TrendingUp,
    title: "Business Strategy",
    description: "Develop comprehensive strategies that align with your vision and drive sustainable growth across all business units.",
    features: ["Market positioning", "Competitive analysis", "Growth roadmaps", "Performance metrics"],
  },
  {
    icon: Lightbulb,
    title: "Innovation Consulting",
    description: "Transform breakthrough ideas into actionable solutions with our structured innovation framework and methodologies.",
    features: ["Ideation workshops", "Prototype development", "Innovation culture", "Technology scouting"],
  },
  {
    icon: Users,
    title: "Team Development",
    description: "Build high-performing teams through leadership training, organizational design, and talent optimization strategies.",
    features: ["Leadership programs", "Team assessments", "Culture transformation", "Succession planning"],
  },
  {
    icon: BarChart3,
    title: "Market Analysis",
    description: "Gain competitive insights with comprehensive data-driven market research, analytics, and forecasting.",
    features: ["Consumer insights", "Trend analysis", "Competitor mapping", "Market forecasting"],
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Modernize your operations with cutting-edge technology solutions and comprehensive digital strategy implementation.",
    features: ["Process automation", "Cloud migration", "Digital workflows", "Tech stack optimization"],
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Protect your business with proactive risk assessment, mitigation strategies, and comprehensive contingency planning.",
    features: ["Risk identification", "Mitigation planning", "Compliance review", "Crisis management"],
  },
];

const additionalServices = [
  { icon: Globe, title: "Global Expansion", description: "Enter new markets with confidence" },
  { icon: Cpu, title: "AI Integration", description: "Leverage artificial intelligence" },
  { icon: PieChart, title: "Financial Advisory", description: "Optimize financial performance" },
];

const processSteps = [
  { step: "01", title: "Discovery", description: "We dive deep to understand your unique challenges, goals, and opportunities." },
  { step: "02", title: "Strategy", description: "Our team develops a tailored roadmap aligned with your vision and resources." },
  { step: "03", title: "Execution", description: "We work alongside you to implement solutions with precision and agility." },
  { step: "04", title: "Optimize", description: "Continuous monitoring and refinement ensure lasting, measurable results." },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary" aria-labelledby="services-hero-heading">
        <div className="container-wide section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1
              id="services-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-card mt-3 mb-6"
            >
              Solutions That Drive{" "}
              <span className="text-gradient">Real Results</span>
            </h1>
            <p className="text-card/70 text-xl leading-relaxed">
              Comprehensive business services designed to transform challenges
              into opportunities and ambitions into achievements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="section-padding bg-muted" aria-labelledby="main-services-heading">
        <div className="container-wide">
          <h2 id="main-services-heading" className="sr-only">Our Core Services</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated p-8 lg:p-10"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-secondary" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" aria-hidden="true" />
                          <span className="text-foreground text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-background" aria-labelledby="additional-services-heading">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2
              id="additional-services-heading"
              className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
            >
              Specialized Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              Beyond our core offerings, we provide specialized services tailored
              to unique business needs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-muted rounded-xl p-6 text-center hover:bg-muted/80 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-secondary" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-primary" aria-labelledby="process-heading">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              How We Work
            </span>
            <h2
              id="process-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-card mt-3 mb-6"
            >
              Our Proven Process
            </h2>
            <p className="text-card/70 text-lg">
              A structured yet flexible approach that delivers consistent,
              exceptional outcomes.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-card/5 backdrop-blur-sm border border-card/10 rounded-2xl p-6 h-full">
                  <div className="text-6xl font-bold text-secondary/20 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-card mb-2">{step.title}</h3>
                  <p className="text-card/70">{step.description}</p>
                </div>
                {/* Connector Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-secondary/30" aria-hidden="true">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="group">
                Request a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
