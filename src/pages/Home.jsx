import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  IndianRupee,
  Rocket,
  GraduationCap,
  Heart,
  HeartPulse,
  Plane,
} from "lucide-react";

import decisionFlows from "../data/decisionFlows";

function Home() {
  const navigate = useNavigate();

  const icons = {
    Briefcase: Briefcase,
    IndianRupee: IndianRupee,
    Rocket: Rocket,
    GraduationCap: GraduationCap,
    Heart: Heart,
    HeartPulse: HeartPulse,
    Plane: Plane,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-6xl font-bold">
          Decide<span className="text-indigo-400">Wise</span>
        </h1>

        <p className="text-gray-400 mt-5 text-xl max-w-2xl">
          AI-powered decisions with clarity, not confusion.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {Object.entries(decisionFlows).map(([key, flow]) => {

            const Icon = icons[flow.icon];

            return (
              <div
                key={key}
                onClick={() => navigate(`/decision/${key}`)}
                className="cursor-pointer rounded-2xl border border-slate-700 p-8 hover:border-indigo-400 transition duration-300"
              >
                <div className="mb-5 text-indigo-400">
                  <Icon size={34} />
                </div>

                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">
                    {flow.title}
                  </h2>

                  {flow.status === "coming-soon" && (
                    <span className="text-xs bg-slate-800 px-2 py-1 rounded-full text-gray-300">
                      Soon
                    </span>
                  )}
                </div>

                <p className="text-gray-400 mt-3">
                  {flow.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default Home;