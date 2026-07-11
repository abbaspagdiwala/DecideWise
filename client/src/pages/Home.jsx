import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Briefcase,
  IndianRupee,
  Rocket,
  GraduationCap,
  Heart,
  HeartPulse,
  Plane,
  Sparkles,
} from "lucide-react";

import decisionFlows from "../data/decisionFlows";

import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";

function Home() {
  const navigate = useNavigate();

  const icons = {
    Briefcase,
    IndianRupee,
    Rocket,
    GraduationCap,
    Heart,
    HeartPulse,
    Plane,
  };

  const available = Object.entries(decisionFlows).filter(
    ([, flow]) => flow.status !== "coming-soon"
  );

  const comingSoon = Object.entries(decisionFlows).filter(
    ([, flow]) => flow.status === "coming-soon"
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden -z-10">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[170px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[140px]" />

      </div>

      <Navbar />

      <Container>

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="py-24 text-center"
        >

          <div className="inline-flex rounded-full bg-indigo-600/20 p-4">

            <Sparkles
              className="text-indigo-400"
              size={34}
            />

          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">

            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">

              DecideWise AI

            </span>

          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-slate-400 leading-9">

            Stop guessing.

            <br />

            Start making confident decisions powered by AI reasoning.

          </p>

          <Button
            className="mt-10"
            onClick={() => navigate("/decision/career")}
          >
            Start Your First Decision
          </Button>

          {/* Stats */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">

            <div>

              <h2 className="text-4xl font-bold text-indigo-400">
                7
              </h2>

              <p className="text-slate-400 mt-2">
                Active Decision Types
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-indigo-400">
                AI
              </h2>

              <p className="text-slate-400 mt-2">
                Powered Analysis
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-indigo-400">
                24/7
              </h2>

              <p className="text-slate-400 mt-2">
                Decision Support
              </p>

            </div>

          </div>

        </motion.section>

        {/* Available */}

        <section className="mt-20">

          <SectionTitle>
            Available Now
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

            {available.map(([key, flow], index) => {

              const Icon = icons[flow.icon];

              return (

                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                >

                  <Card
                    onClick={() => navigate(`/decision/${key}`)}
                  >

                    <Icon
                      size={40}
                      className="text-indigo-400 mb-5"
                    />

                    <h2 className="text-2xl font-semibold">
                      {flow.title}
                    </h2>

                    <p className="mt-3 text-slate-400 leading-7">
                      {flow.description}
                    </p>

                  </Card>

                </motion.div>

              );

            })}

          </div>

        </section>

        <section className="mt-28">


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

            {comingSoon.map(([key, flow], index) => {

              const Icon = icons[flow.icon];

              return (

                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                >

                  <Card>

                    <Icon
                      size={40}
                      className="text-slate-500 mb-5"
                    />

                    <div className="flex justify-between items-center">

                      <h2 className="text-2xl font-semibold">
                        {flow.title}
                      </h2>

                      <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">

                        Soon

                      </span>

                    </div>

                    <p className="mt-3 text-slate-400 leading-7">

                      {flow.description}

                    </p>

                  </Card>

                </motion.div>

              );

            })}

          </div>

        </section>

      </Container>

      <Footer />

    </div>
  );
}

export default Home;