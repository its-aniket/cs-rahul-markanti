import { CircleCheckBig } from "lucide-react";

export default function ChecklistItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-gray-600">
      <CircleCheckBig className="w-5 h-5 text-[#C8972B] shrink-0 mt-0.5" />
      <span className="text-sm leading-relaxed">{text}</span>
    </li>
  );
}
