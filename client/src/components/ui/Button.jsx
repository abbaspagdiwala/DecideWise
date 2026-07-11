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
      className={`rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-indigo-500 hover:-translate-y-1 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;