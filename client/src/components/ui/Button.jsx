function Button({
  children,
  onClick,
  className = "",
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-2xl
bg-gradient-to-r
from-indigo-600
to-violet-600
px-7
py-3
font-semibold
transition-all
duration-300
hover:scale-105
hover:shadow-[0_0_30px_rgba(99,102,241,.35)]
active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;