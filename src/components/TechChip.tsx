import { techIcon } from "../data/tech";

export default function TechChip({ name, className = "chip" }: { name: string; className?: string }) {
  const icon = techIcon(name);
  return (
    <span className={className}>
      {icon && <img className="tech-icon" src={icon} alt="" width={16} height={16} loading="lazy" />}
      {name}
    </span>
  );
}
