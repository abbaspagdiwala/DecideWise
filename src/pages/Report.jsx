import { useNavigate } from "react-router-dom";

function Report() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-slate-900 rounded-2xl p-8 border border-slate-800">
        <h1 className="text-4xl font-bold mb-4">
          AI Decision Report
        </h1>

        <p className="text-gray-400 mb-8">
          Your personalized decision report will appear here after AI analysis.
        </p>

        <div className="space-y-4">
          <div className="rounded-lg bg-slate-800 p-4">
            <h2 className="font-semibold text-lg">🎯 Recommendation</h2>
            <p className="text-gray-400 mt-2">
              Waiting for AI analysis...
            </p>
          </div>

          <div className="rounded-lg bg-slate-800 p-4">
            <h2 className="font-semibold text-lg">⚠️ Risks</h2>
            <p className="text-gray-400 mt-2">
              Waiting for AI analysis...
            </p>
          </div>

          <div className="rounded-lg bg-slate-800 p-4">
            <h2 className="font-semibold text-lg">🗺️ Action Plan</h2>
            <p className="text-gray-400 mt-2">
              Waiting for AI analysis...
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-8 w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-xl font-semibold transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Report;