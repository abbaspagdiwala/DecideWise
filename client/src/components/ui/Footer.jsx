import Container from "./Container";

function Footer() {
  return (
   <footer className="border-t border-slate-800 mt-24">

<Container>

<div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">

<div>

<h2 className="font-bold text-white">
Decide<span className="text-indigo-400">Wise</span>
</h2>

<p className="text-slate-500 text-sm mt-1">
AI Decision Intelligence
</p>

</div>

<p className="text-slate-500">
Built for Mesh Hackathon 2026
</p>

</div>

</Container>

</footer>
  );
}

export default Footer;