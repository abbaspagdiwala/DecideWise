import { useParams, useNavigate } from "react-router-dom";
import decisionFlows from "../data/decisionFlows";

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
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6">

        <h1 className="text-5xl font-bold mb-4">
          {flow.title}
        </h1>

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

        <h1 className="text-5xl font-bold">
          {flow.title}
        </h1>

        <p className="text-gray-400 mt-3">
          {flow.description}
        </p>

        <div className="mt-10 space-y-6">

          {flow.questions.map((question) => (
            <div key={question.id}>

              <label className="block mb-2 text-lg">
                {question.label}
              </label>

              {question.type === "text" && (
                <input
                  className="w-full rounded-lg bg-slate-800 p-3 outline-none"
                />
              )}

              {question.type === "number" && (
                <input
                  type="number"
                  className="w-full rounded-lg bg-slate-800 p-3 outline-none"
                />
              )}

              {question.type === "textarea" && (
                <textarea
                  rows="4"
                  className="w-full rounded-lg bg-slate-800 p-3 outline-none"
                />
              )}

              {question.type === "select" && (
                <select
                  className="w-full rounded-lg bg-slate-800 p-3 outline-none"
                >
                  <option>Select</option>

                  {question.options.map((option) => (
                    <option key={option}>
                      {option}
                    </option>
                  ))}

                </select>
              )}

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default DecisionPage;