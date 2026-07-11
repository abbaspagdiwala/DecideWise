import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Brain,
  CheckCircle2,
  LoaderCircle,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { analyzeDecision } from "../services/api";

function Analysis() {
  const navigate = useNavigate();
  const location = useLocation();

  const prompt = location.state?.prompt;

  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Understanding your responses",
    "Analyzing possible outcomes",
    "Comparing alternatives",
    "Generating personalized recommendation",
    "Preparing your AI report",
  ];

  useEffect(() => {
    if (!prompt) {
      navigate("/");
      return;
    }

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        return prev + 1;
      });
    }, 80);

    const stepTimer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) return prev + 1;
        return prev;
      });
    }, 1200);

    const runAnalysis = async () => {
      try {
        const result = await analyzeDecision(prompt);

        clearInterval(progressTimer);
        clearInterval(stepTimer);

        setProgress(100);

        setTimeout(() => {
          navigate("/report", {
            state: {
              report: result.result,
            },
          });
        }, 700);
      } catch (error) {
        console.error(error);

        clearInterval(progressTimer);
        clearInterval(stepTimer);

        navigate("/error");
      }
    };

    runAnalysis();

    return () => {
      clearInterval(progressTimer);
      clearInterval(stepTimer);
    };
  }, [navigate, prompt]);

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden flex items-center justify-center">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[170px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[140px]" />

      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl mx-6 rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-10"
      >

        {/* Icon */}

        <div className="flex justify-center">

          <div className="rounded-full bg-indigo-600/20 p-6">

            <Brain
              size={70}
              className="text-indigo-400 animate-pulse"
            />

          </div>

        </div>

        {/* Heading */}

        <h1 className="mt-8 text-center text-4xl md:text-5xl font-bold">

          AI is Thinking...

        </h1>

        <p className="mt-4 text-center text-slate-400 text-lg">

          Please wait while DecideWise evaluates your decision.

        </p>

        {/* Progress */}

        <div className="mt-12">

          <div className="flex justify-between mb-3 text-slate-400 text-sm">

            <span>Analysis Progress</span>

            <span>{progress}%</span>

          </div>

          <div className="h-3 rounded-full bg-slate-800 overflow-hidden">

            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 to-violet-500"
              animate={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        {/* Steps */}

        <div className="mt-12 space-y-4">

          {steps.map((step, index) => (

            <motion.div
              key={step}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
            >

              {index < currentStep ? (
                <CheckCircle2 className="text-green-400" />
              ) : index === currentStep ? (
                <LoaderCircle className="animate-spin text-indigo-400" />
              ) : (
                <Sparkles className="text-slate-600" />
              )}

              <span
                className={
                  index <= currentStep
                    ? "text-white"
                    : "text-slate-500"
                }
              >
                {step}
              </span>

            </motion.div>

          ))}

        </div>

        {/* Footer */}

        <p className="mt-10 text-center text-sm text-slate-500">

          Powered by Mesh API

        </p>

      </motion.div>

    </div>
  );
}

export default Analysis;