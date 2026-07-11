import Container from "./Container";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-2xl font-bold text-white">
            Decide<span className="text-indigo-400">Wise</span>
          </h1>

          <div className="flex gap-8 text-slate-400">
            <button className="hover:text-white transition">
              About
            </button>

            <button className="hover:text-white transition">
              GitHub
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;