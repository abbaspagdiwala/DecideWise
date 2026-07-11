import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import decisionFlows from "../data/decisionFlows";
import { buildPrompt } from "../utils/promptBuilder";
import { analyzeDecision } from "../services/api";

function DecisionPage() {
  const { type } = useParams();
  const navigate = useNavigate();

  const flow = decisionFlows[type];

  if (!flow) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <h1 className="text-3xl">Decision Not Found</h1>
      </div>
    );
  }

  if (flow.status === "coming-soon") {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">{flow.title}</h1>

        <p className="text-slate-400 mt-4">
          This decision assistant is under development.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 hover:bg-indigo-500"
        >
          Back Home
        </button>
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

  const handleAnalysis = async () => {
    try {
      const prompt = buildPrompt(flow, answers);

      navigate("/analysis", {
        state: {
          prompt,
        },
      });
    } catch (error) {
      console.error(error);
      alert("Analysis failed.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[150px]" />

      <div className="relative max-w-2xl mx-auto px-6 py-20">
        <button
          onClick={() => navigate("/")}
          className="text-indigo-400 hover:text-indigo-300"
        >
          ← Back
        </button>

        <h1 className="text-5xl font-bold mt-8">{flow.title}</h1>

        <p className="text-slate-400 mt-3">{flow.description}</p>

        <div className="mt-12">
          <div className="flex justify-between text-sm text-slate-400 mb-2">
            <span>
              Question {currentQuestion + 1} of {totalQuestions}
            </span>

            <span>
              {Math.round(((currentQuestion + 1) / totalQuestions) * 100)}%
            </span>
          </div>

          <div className="h-2 rounded-full bg-slate-800 overflow-hidden mb-10">
            <div
              className="h-full bg-indigo-500 transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
              }}
            />
          </div>

          <label className="block text-2xl font-semibold mb-6">
            {question.label}
          </label>

          {question.type === "text" && (
            <input
              type="text"
              value={answers[question.id] || ""}
              onChange={(e) => handleChange(question.id, e.target.value)}
              className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-4 outline-none focus:border-indigo-500"
            />
          )}

          {question.type === "number" && (
            <input
              type="number"
              value={answers[question.id] || ""}
              onChange={(e) => handleChange(question.id, e.target.value)}
              className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-4 outline-none focus:border-indigo-500"
            />
          )}

          {question.type === "textarea" && (
            <textarea
              rows="5"
              value={answers[question.id] || ""}
              onChange={(e) => handleChange(question.id, e.target.value)}
              className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-4 outline-none focus:border-indigo-500"
            />
          )}

          {question.type === "select" && (
            <select
              value={answers[question.id] || ""}
              onChange={(e) => handleChange(question.id, e.target.value)}
              className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-4 outline-none focus:border-indigo-500"
            >
              <option value="">Select an option</option>

              {question.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}

          <div className="flex justify-between mt-12">
            <button
              disabled={currentQuestion === 0}
              onClick={() => setCurrentQuestion((prev) => prev - 1)}
              className="rounded-xl border border-slate-700 px-6 py-3 disabled:opacity-40"
            >
              Previous
            </button>

            {currentQuestion === totalQuestions - 1 ? (
              <button
                onClick={handleAnalysis}
                className="rounded-xl bg-indigo-600 px-8 py-3 hover:bg-indigo-500"
              >
                Analyze Decision
              </button>
            ) : (
              <button
                onClick={() => setCurrentQuestion((prev) => prev + 1)}
                className="rounded-xl bg-indigo-600 px-8 py-3 hover:bg-indigo-500"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DecisionPage;
