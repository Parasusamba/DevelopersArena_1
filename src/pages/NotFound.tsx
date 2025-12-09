import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center bg-muted" aria-labelledby="error-heading">
        <div className="container-wide section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            {/* 404 Number */}
            <div className="mb-8">
              <span className="text-[10rem] sm:text-[12rem] font-bold text-gradient leading-none">
                404
              </span>
            </div>

            <h1
              id="error-heading"
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Page Not Found
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/">
                <Button variant="secondary" size="lg" className="group">
                  <Home className="w-5 h-5" aria-hidden="true" />
                  Back to Home
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-5 h-5" aria-hidden="true" />
                Go Back
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
