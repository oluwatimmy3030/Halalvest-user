export function Brand({ compact = false }) {
  return <img src="/logo.png" alt="HalalVest" width="270" height="80" className={compact ? "w-24 h-auto object-contain object-left" : "w-36 h-auto object-contain object-left"} />;
}