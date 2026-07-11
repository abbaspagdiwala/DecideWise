import {
  Brain,
  Target,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Container from "../components/ui/Container";

function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden -z-10">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[170px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[140px]" />

      </div>

      <Navbar />

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-20"
        >

          {/* Hero */}

          <div className="text-center">

            <div className="inline-flex rounded-full bg-indigo-600/20 p-6">

              <Brain
                className="text-indigo-400"
                size={70}
              />

            </div>

            <h1 className="mt-8 text-4xl md:text-6xl font-bold">

              About{" "}

              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">

                DecideWise AI

              </span>

            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-slate-400 leading-9">

              DecideWise helps people make better decisions using
              structured reasoning and AI-powered recommendations.

              Whether you're choosing a career, evaluating finances,
              or validating a startup idea, DecideWise provides
              personalized insights instead of generic advice.

            </p>

          </div>

          {/* Cards */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-indigo-500 hover:shadow-[0_0_35px_rgba(99,102,241,.15)]">

              <Target
                className="text-indigo-400"
                size={38}
              />

              <h2 className="text-2xl font-bold mt-6">
                Purpose
              </h2>

              <p className="text-slate-400 mt-4 leading-8">

                Help people evaluate important decisions using
                structured thinking instead of guesswork.

              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-indigo-500 hover:shadow-[0_0_35px_rgba(99,102,241,.15)]">

              <Sparkles
                className="text-yellow-400"
                size={38}
              />

              <h2 className="text-2xl font-bold mt-6">
                AI Powered
              </h2>

              <p className="text-slate-400 mt-4 leading-8">

                Powered by Mesh API to generate contextual,
                personalized recommendations based on user input.

              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-indigo-500 hover:shadow-[0_0_35px_rgba(99,102,241,.15)]">

              <Lightbulb
                className="text-green-400"
                size={38}
              />

              <h2 className="text-2xl font-bold mt-6">
                Vision
              </h2>

              <p className="text-slate-400 mt-4 leading-8">

                Build AI that enhances human decision-making by
                making complex choices easier to understand.

              </p>

            </div>

          </div>

          {/* Bottom Section */}

          <div className="mt-24 rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-10 text-center">

            <Brain
              className="mx-auto text-indigo-400"
              size={42}
            />

            <h2 className="text-3xl font-bold mt-6">
              Why DecideWise?
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-slate-400 leading-9">

              Most AI tools simply answer questions.

              DecideWise is built specifically to help users evaluate
              important decisions using structured questionnaires,
              reasoning, trade-off analysis, and actionable guidance.

            </p>

          </div>

        </motion.div>

      </Container>

      <Footer />

    </div>
  );
}

export default About;