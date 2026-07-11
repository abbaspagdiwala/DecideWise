import { useEffect, useState } from "react";
import { Brain, CheckCircle2, LoaderCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { analyzeDecision } from "../services/api";

function Analysis() {
  const navigate = useNavigate();
  const location = useLocation();

  const { prompt } = location.state || {};

  const [step, setStep] = useState(0);

  const steps = [
    "Understanding your responses...",
    "Evaluating possible outcomes...",
    "Preparing personalized recommendation...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev < steps.length - 1) return prev + 1;
        return prev;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const runAnalysis = async () => {
      try {
        const result = await analyzeDecision(prompt);

        navigate("/report", {
          state: {
            report: result.result,
          },
        });
      } catch (err) {
        console.error(err);
        alert("Analysis failed.");
        navigate("/");
      }
    };

    if (prompt) {
      runAnalysis();
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white px-6">

      <div className="max-w-xl w-full text-center">

        <Brain
          className="mx-auto text-indigo-400 animate-pulse"
          size={70}
        />

        <h1 className="text-4xl font-bold mt-8">
          AI is analyzing your decision
        </h1>

        <p className="text-slate-400 mt-3">
          Please wait while DecideWise prepares your personalized recommendation.
        </p>

        <div className="mt-14 space-y-5">

          {steps.map((item, index) => (

            <div
              key={item}
              className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5"
            >

              {index <= step ? (
                <CheckCircle2 className="text-green-400" />
              ) : (
                <LoaderCircle className="animate-spin text-indigo-400" />
              )}

              <span>{item}</span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Analysis;