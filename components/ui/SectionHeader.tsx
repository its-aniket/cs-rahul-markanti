interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeaderProps) {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const headingColor = light ? "text-white" : "text-[#1B2A4A]";
  const subtitleColor = light ? "text-gray-300" : "text-gray-600";

  return (
    <div className={`${textAlign} mb-10`}>
      {eyebrow && (
        <p className="text-[#C8972B] text-sm font-semibold uppercase tracking-widest mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl font-bold ${headingColor} leading-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base md:text-lg ${subtitleColor} max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
