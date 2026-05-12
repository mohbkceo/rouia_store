export default function Button({ children, variant = "primary", className = "", ...props }) {
  const base = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full px-6 py-3 text-sm tracking-wide";
  const variants = {
    primary: "bg-brand text-white hover:bg-brand/90 active:scale-95",
    outline: "border border-brand text-brand hover:bg-brand hover:text-white active:scale-95",
    ghost: "text-brand hover:bg-brand/5 active:scale-95",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
