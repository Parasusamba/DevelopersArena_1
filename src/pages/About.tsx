import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Target, Heart, Users, CheckCircle2, Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import aboutTeam from "@/assets/about-team.jpg";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue the highest standards in everything we do, delivering exceptional quality that exceeds expectations.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Our focus is on measurable outcomes that create real value for our clients and their stakeholders.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "We build lasting partnerships based on trust, transparency, and a deep commitment to client success.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best solutions emerge from diverse perspectives working together toward shared goals.",
  },
];

const timeline = [
  { year: "2008", title: "Founded", description: "NexusCore was established with a vision to transform business consulting." },
  { year: "2012", title: "Expansion", description: "Opened offices in 3 new cities and grew our team to 50+ experts." },
  { year: "2016", title: "Innovation Award", description: "Recognized for pioneering digital transformation methodologies." },
  { year: "2020", title: "Global Reach", description: "Expanded to serve clients across 15 countries worldwide." },
  { year: "2024", title: "500+ Projects", description: "Celebrated the milestone of completing over 500 successful projects." },
];

const team = [
  { name: "Alexandra Chen", role: "CEO & Founder", initials: "AC" },
  { name: "Marcus Williams", role: "Chief Strategy Officer", initials: "MW" },
  { name: "Sarah Mitchell", role: "Head of Innovation", initials: "SM" },
  { name: "David Thompson", role: "Director of Operations", initials: "DT" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted" aria-labelledby="about-hero-heading">
        <div className="container-wide section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h1
              id="about-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-6"
            >
              Building Tomorrow's{" "}
              <span className="text-gradient">Success Stories</span>
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              For over 15 years, NexusCore has been at the forefront of business
              transformation, helping organizations navigate complexity and
              achieve extraordinary results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-background" aria-labelledby="mission-heading">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                  alt="NexusCore team members collaborating in modern office"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              <div
                className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-secondary/20 rounded-2xl"
                aria-hidden="true"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Our Mission
              </span>
              <h2
                id="mission-heading"
                className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6"
              >
                Empowering Businesses to Thrive
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We combine deep industry expertise with innovative thinking to help
                organizations transform challenges into opportunities. Our
                mission is simple: to be the catalyst for your success.
              </p>
              <div className="space-y-4">
                {["Strategic planning & execution", "Innovation & digital transformation", "Operational excellence", "Sustainable growth solutions"].map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" aria-hidden="true" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted" aria-labelledby="values-heading">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2
              id="values-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6"
            >
              What Drives Us Forward
            </h2>
            <p className="text-muted-foreground text-lg">
              Our core values define who we are and guide every decision we make.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-secondary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-background" aria-labelledby="timeline-heading">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2
              id="timeline-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6"
            >
              Milestones That Define Us
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" aria-hidden="true" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 hidden md:block" />
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-secondary rounded-full md:-translate-x-1/2 z-10" aria-hidden="true" />
                
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="card-elevated p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-secondary" aria-hidden="true" />
                      <span className="text-secondary font-bold">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-primary" aria-labelledby="team-heading">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Leadership Team
            </span>
            <h2
              id="team-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-card mt-3 mb-6"
            >
              Meet the Experts
            </h2>
            <p className="text-card/70 text-lg">
              Our leadership team brings decades of combined experience across
              industries and disciplines.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card/5 backdrop-blur-sm border border-card/10 rounded-2xl p-6 text-center hover:bg-card/10 transition-colors"
              >
                <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 text-primary font-bold text-2xl">
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold text-card mb-1">{member.name}</h3>
                <p className="text-card/60">{member.role}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Join Our Story?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's write the next chapter of success together.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="group">
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
