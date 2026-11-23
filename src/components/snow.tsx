const FLAKES = Array.from({ length: 46 }, (_, i) => ({
  left: (i * 47) % 100,
  size: 2 + ((i * 7) % 4),
  duration: 8 + ((i * 11) % 10),
  delay: -((i * 17) % 16),
  opacity: 0.3 + ((i * 3) % 6) / 10,
}));

export function Snow({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {FLAKES.map((f, i) => (
        <span
          key={i}
          className="snow absolute -top-4 rounded-full bg-white"
          style={{
            left: `${f.left}%`,
            width: f.size,
            height: f.size,
            opacity: f.opacity,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
