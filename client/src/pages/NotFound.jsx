import { useNavigate } from "react-router-dom";
import { TriangleAlert, Home } from "lucide-react";
import { motion } from "framer-motion";
function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center relative overflow-hidden">

      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[160px]" />

      <div className="relative text-center max-w-xl px-6">

        <div className="flex justify-center">
          <div className="rounded-full bg-red-500/10 p-6">
            <TriangleAlert
              size={70}
              className="text-red-400"
            />
          </div>
        </div>

        <h1 className="text-7xl font-bold mt-10">
          404
        </h1>

        <h2 className="text-3xl font-semibold mt-4">
          Decision Not Found
        </h2>

        <p className="text-slate-400 mt-6 leading-8">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-10 inline-flex items-center gap-3 rounded-xl bg-indigo-600 px-8 py-3 hover:bg-indigo-500 transition"
        >
          <Home size={18} />
          Back to Home
        </button>

      </div>

    </div>
  );
}

export default NotFound;