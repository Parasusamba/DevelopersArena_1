import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Careers", path: "/about" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Business Strategy", path: "/services" },
    { name: "Digital Transformation", path: "/services" },
    { name: "Market Research", path: "/services" },
    { name: "Brand Development", path: "/services" },
  ],
  support: [
    { name: "Help Center", path: "/contact" },
    { name: "Privacy Policy", path: "/" },
    { name: "Terms of Service", path: "/" },
    { name: "FAQ", path: "/contact" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="container-wide section-padding">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-primary font-bold text-xl">N</span>
              </div>
              <span className="font-bold text-xl text-secondary">NexusCore</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Empowering businesses with innovative solutions that drive growth,
              efficiency, and lasting success in the modern marketplace.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:hello@nexuscore.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                <span>hello@nexuscore.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5" aria-hidden="true" />
                <span>123 Business Ave, Suite 100</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <nav aria-label="Company links">
            <h3 className="font-semibold text-secondary mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services links">
            <h3 className="font-semibold text-secondary mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Support links">
            <h3 className="font-semibold text-secondary mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} NexusCore. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
