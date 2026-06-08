import { TeamMember } from "@/lib/team";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
      <div className="w-16 h-16 bg-[#1B2A4A] rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-[#C8972B] font-serif font-bold text-xl">
          {member.initials}
        </span>
      </div>
      <h3 className="font-serif text-lg font-bold text-[#1B2A4A] mb-1">
        {member.name}
      </h3>
      <p className="text-[#C8972B] text-sm font-semibold mb-3">{member.role}</p>
      <p className="text-gray-500 text-sm leading-relaxed">{member.description}</p>
    </div>
  );
}
