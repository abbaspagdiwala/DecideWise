function Card({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500"
    >
      {children}
    </div>
  );
}

export default Card;