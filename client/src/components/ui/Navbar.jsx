import Container from "./Container";
import { Link } from "react-router-dom";
import { Brain } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <Brain className="text-indigo-400" size={28} />

            <h1 className="text-2xl font-bold text-white">
              Decide<span className="text-indigo-400">Wise</span>
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-8">

            <Link
              to="/"
              className="text-slate-400 hover:text-white transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-slate-400 hover:text-white transition"
            >
              About
            </Link>

            <a
              href="https://github.com/abbaspagdiwala/DecideWise"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition"
            >
              GitHub
            </a>

          </div>

        </div>
      </Container>
    </nav>
  );
}

export default Navbar;