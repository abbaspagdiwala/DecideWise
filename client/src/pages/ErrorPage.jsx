import { useNavigate } from "react-router-dom";
import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden flex items-center justify-center px-6">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-red-500/15 blur-[170px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-indigo-500/10 blur-[140px]" />

      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-10 text-center"
      >

        <div className="inline-flex rounded-full bg-red-500/10 p-6">

          <AlertTriangle
            size={70}
            className="text-red-400"
          />

        </div>

        <h1 className="mt-8 text-4xl md:text-5xl font-bold">
          Analysis Failed
        </h1>

        <p className="mt-6 text-slate-400 leading-8">

          DecideWise couldn't generate your AI report.

          <br />
          <br />

          Possible reasons:

        </p>

        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-6 text-left">

          <ul className="space-y-3 text-slate-300">

            <li>• Mesh API credits are unavailable.</li>

            <li>• Temporary network issue.</li>

            <li>• AI service is currently unavailable.</li>

          </ul>

        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-6 py-3 transition hover:border-indigo-500"
          >
            <RefreshCw size={18} />
            Try Again
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,.35)]"
          >
            <ArrowLeft size={18} />
            Return Home
          </button>

        </div>

      </motion.div>

    </div>
  );
}

export default ErrorPage;