import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  IndianRupee,
  Rocket,
  GraduationCap,
  Heart,
  HeartPulse,
  Plane,
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

      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[150px]" />

      <Navbar />

      <Container>

        <section className="py-24 text-center">

          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Decide<span className="text-indigo-400">Wise</span>
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-xl text-slate-400 leading-8">
            AI-powered decision intelligence for your career,
            finances and startup journey.
          </p>

          <Button
            className="mt-10"
            onClick={() => navigate("/decision/career")}
          >
            Start Your First Decision
          </Button>

        </section>

        <section className="mt-20">

          <SectionTitle>
            Available Now
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8">

            {available.map(([key, flow]) => {

              const Icon = icons[flow.icon];

              return (
                <Card
                  key={key}
                  onClick={() => navigate(`/decision/${key}`)}
                >

                  <Icon
                    size={40}
                    className="text-indigo-400 mb-5"
                  />

                  <h2 className="text-2xl font-semibold">
                    {flow.title}
                  </h2>

                  <p className="text-slate-400 mt-3">
                    {flow.description}
                  </p>

                </Card>
              );

            })}

          </div>

        </section>

        <section className="mt-24">

          <SectionTitle>
            Coming Soon
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8">

            {comingSoon.map(([key, flow]) => {

              const Icon = icons[flow.icon];

              return (
                <Card key={key}>

                  <Icon
                    size={40}
                    className="text-slate-500 mb-5"
                  />

                  <div className="flex items-center justify-between">

                    <h2 className="text-2xl font-semibold">
                      {flow.title}
                    </h2>

                    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                      Soon
                    </span>

                  </div>

                  <p className="text-slate-400 mt-3">
                    {flow.description}
                  </p>

                </Card>
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