import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import decisionFlows from "../data/decisionFlows";
import { buildPrompt } from "../utils/promptBuilder";

function DecisionPage() {
  const { type } = useParams();
  const navigate = useNavigate();

  const flow = decisionFlows[type];

  if (!flow) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">Decision Not Found</h1>
      </div>
    );
  }

  if (flow.status === "coming-soon") {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold">{flow.title}</h1>

          <p className="mt-5 text-slate-400">
            This decision assistant is currently under development.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-8 rounded-xl bg-indigo-600 px-7 py-3 hover:bg-indigo-500"
          >
            Back Home
          </button>
        </div>
      </div>
    );
  }

  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const totalQuestions = flow.questions.length;
  const question = flow.questions[currentQuestion];

  const handleChange = (id, value) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleAnalysis = () => {
    const prompt = buildPrompt(flow, answers);

    navigate("/analysis", {
      state: {
        prompt,
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden -z-10">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[170px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[140px]" />

      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-3xl mx-auto px-6 py-20"
      >

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="mt-10">

          <div className="inline-flex rounded-full bg-indigo-600/20 p-4">

            <Sparkles
              className="text-indigo-400"
              size={32}
            />

          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold">

            {flow.title}

          </h1>

          <p className="mt-4 text-slate-400 text-lg leading-8">

            {flow.description}

          </p>

        </div>

        <div className="mt-12 rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-8">

          {/* Progress */}

          <div className="flex justify-between text-sm text-slate-400 mb-3">

            <span>
              Question {currentQuestion + 1} of {totalQuestions}
            </span>

            <span>
              {Math.round(
                ((currentQuestion + 1) / totalQuestions) * 100
              )}
              %
            </span>

          </div>

          <div className="h-3 rounded-full bg-slate-800 overflow-hidden">

            <motion.div
              animate={{
                width: `${
                  ((currentQuestion + 1) / totalQuestions) * 100
                }%`,
              }}
              className="h-full bg-gradient-to-r from-indigo-500 to-violet-500"
            />

          </div>

          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >

            <label className="block text-2xl font-semibold mt-10 mb-6">

              {question.label}

            </label>

            {question.type === "text" && (
              <input
                type="text"
                value={answers[question.id] || ""}
                onChange={(e) =>
                  handleChange(question.id, e.target.value)
                }
                className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 p-4 outline-none focus:border-indigo-500"
              />
            )}

            {question.type === "number" && (
              <input
                type="number"
                value={answers[question.id] || ""}
                onChange={(e) =>
                  handleChange(question.id, e.target.value)
                }
                className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 p-4 outline-none focus:border-indigo-500"
              />
            )}

            {question.type === "textarea" && (
              <textarea
                rows="5"
                value={answers[question.id] || ""}
                onChange={(e) =>
                  handleChange(question.id, e.target.value)
                }
                className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 p-4 outline-none focus:border-indigo-500"
              />
            )}

            {question.type === "select" && (
              <select
                value={answers[question.id] || ""}
                onChange={(e) =>
                  handleChange(question.id, e.target.value)
                }
                className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 p-4 outline-none focus:border-indigo-500"
              >
                <option value="">
                  Select an option
                </option>

                {question.options.map((option) => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                ))}
              </select>
            )}

          </motion.div>

          <div className="flex justify-between mt-12">

            <button
              disabled={currentQuestion === 0}
              onClick={() =>
                setCurrentQuestion((prev) => prev - 1)
              }
              className="rounded-xl border border-slate-700 px-6 py-3 transition hover:border-indigo-500 disabled:opacity-40"
            >
              Previous
            </button>

            {currentQuestion === totalQuestions - 1 ? (
              <button
                onClick={handleAnalysis}
                className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,.35)]"
              >
                Analyze Decision
              </button>
            ) : (
              <button
                onClick={() =>
                  setCurrentQuestion((prev) => prev + 1)
                }
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,.35)]"
              >
                Next
                <ArrowRight size={18} />
              </button>
            )}

          </div>

        </div>

      </motion.div>

    </div>
  );
}

export default DecisionPage;