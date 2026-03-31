export function Eyebrow({ children, color = "amber" }: { children: React.ReactNode; color?: "amber" | "red" }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className={`w-6 h-px ${color === "red" ? "bg-red" : "bg-amber"}`} />
      <span className={`font-mono text-[10px] tracking-[0.18em] uppercase ${color === "red" ? "text-red" : "text-amber"}`}>
        {children}
      </span>
      <div className={`w-6 h-px ${color === "red" ? "bg-red" : "bg-amber"}`} />
    </div>
  );
}
