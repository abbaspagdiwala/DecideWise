import { Briefcase, IndianRupee, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Career",
      desc: "Choose your next career move confidently.",
      icon: <Briefcase size={34} />,
      path: "/career",
    },
    {
      title: "Finance",
      desc: "Make smarter money decisions.",
      icon: <IndianRupee size={34} />,
      path: "/finance",
    },
    {
      title: "Startup",
      desc: "Validate and improve your startup idea.",
      icon: <Rocket size={34} />,
      path: "/startup",
    },
  ];

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

          {cards.map((card) => (
            <div
              key={card.title}
              onClick={() => navigate(card.path)}
              className="cursor-pointer rounded-2xl border border-slate-700 p-8 hover:border-indigo-400 transition"
            >
              <div className="mb-5 text-indigo-400">
                {card.icon}
              </div>

              <h2 className="text-2xl font-semibold">
                {card.title}
              </h2>

              <p className="text-gray-400 mt-3">
                {card.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Home;