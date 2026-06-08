import Link from "next/link";
import { ArrowRight, Building2, Receipt, FileText, Calculator, ClipboardList, Users, Lightbulb, Heart, Tag, BadgeCheck, FileBarChart } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-6 h-6 text-white" />,
  Receipt: <Receipt className="w-6 h-6 text-white" />,
  FileText: <FileText className="w-6 h-6 text-white" />,
  Calculator: <Calculator className="w-6 h-6 text-white" />,
  ClipboardList: <ClipboardList className="w-6 h-6 text-white" />,
  Users: <Users className="w-6 h-6 text-white" />,
  Lightbulb: <Lightbulb className="w-6 h-6 text-white" />,
  Heart: <Heart className="w-6 h-6 text-white" />,
  Tag: <Tag className="w-6 h-6 text-white" />,
  BadgeCheck: <BadgeCheck className="w-6 h-6 text-white" />,
  FileBarChart: <FileBarChart className="w-6 h-6 text-white" />,
};

interface ServiceCardProps {
  slug: string;
  title: string;
  shortDesc: string;
  icon: string;
}

export default function ServiceCard({ slug, title, shortDesc, icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col">
      <div className="w-12 h-12 bg-[#C8972B] rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
        {iconMap[icon] ?? <FileText className="w-6 h-6 text-white" />}
      </div>
      <h3 className="font-serif text-lg font-bold text-[#1B2A4A] mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-1">{shortDesc}</p>
      <Link
        href={`/services/${slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-[#C8972B] font-semibold text-sm hover:gap-2.5 transition-all"
      >
        Learn More <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
