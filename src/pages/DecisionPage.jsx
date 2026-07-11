import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import decisionFlows from "../data/decisionFlows";

function DecisionPage() {
  const { type } = useParams();
  const navigate = useNavigate();

  const flow = decisionFlows[type];

  const [answers, setAnswers] = useState({});

  const handleChange = (id, value) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  if (!flow) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <h1 className="text-3xl">Decision Not Found</h1>
      </div>
    );
  }

  if (flow.status === "coming-soon") {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6">
        <h1 className="text-5xl font-bold mb-4">{flow.title}</h1>

        <p className="text-gray-400 mb-8 text-center max-w-md">
          This decision assistant is currently under development.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-500 transition"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto py-16 px-6">
        <button
          onClick={() => navigate("/")}
          className="text-indigo-400 hover:text-indigo-300 mb-6"
        >
          ← Back
        </button>

        <h1 className="text-5xl font-bold">{flow.title}</h1>

        <p className="text-gray-400 mt-3">{flow.description}</p>

        <div className="mt-10 space-y-6">
          {flow.questions.map((question) => (
            <div key={question.id}>
              <label className="block mb-2 text-lg font-medium">
                {question.label}
              </label>

              {question.type === "text" && (
                <input
                  type="text"
                  value={answers[question.id] || ""}
                  onChange={(e) =>
                    handleChange(question.id, e.target.value)
                  }
                  className="w-full rounded-lg bg-slate-800 p-3 outline-none border border-slate-700 focus:border-indigo-500"
                />
              )}

              {question.type === "number" && (
                <input
                  type="number"
                  value={answers[question.id] || ""}
                  onChange={(e) =>
                    handleChange(question.id, e.target.value)
                  }
                  className="w-full rounded-lg bg-slate-800 p-3 outline-none border border-slate-700 focus:border-indigo-500"
                />
              )}

              {question.type === "textarea" && (
                <textarea
                  rows="4"
                  value={answers[question.id] || ""}
                  onChange={(e) =>
                    handleChange(question.id, e.target.value)
                  }
                  className="w-full rounded-lg bg-slate-800 p-3 outline-none border border-slate-700 focus:border-indigo-500"
                />
              )}

              {question.type === "select" && (
                <select
                  value={answers[question.id] || ""}
                  onChange={(e) =>
                    handleChange(question.id, e.target.value)
                  }
                  className="w-full rounded-lg bg-slate-800 p-3 outline-none border border-slate-700 focus:border-indigo-500"
                >
                  <option value="">Select an option</option>

                  {question.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}

          <button
            onClick={() => console.log(answers)}
            className="w-full mt-6 bg-indigo-600 hover:bg-indigo-500 py-3 rounded-xl font-semibold transition"
          >
            Continue Analysis
          </button>
        </div>
      </div>
    </div>
  );
}

export default DecisionPage;