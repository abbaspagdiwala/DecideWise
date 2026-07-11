function Card({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer 
rounded-2xl
border
border-slate-800
bg-slate-900/70
backdrop-blur-xl
p-8
transition-all
duration-300
hover:-translate-y-2
hover:scale-[1.02]
hover:border-indigo-500
hover:shadow-[0_0_35px_rgba(99,102,241,.15)]
"
    >
      {children}
    </div>
  );
}

export default Card;