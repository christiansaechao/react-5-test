import React from "react";

const team = [
  { name: "Sarah Johnson", role: "Lead Designer", avatar: "SJ" },
  { name: "Michael Chen", role: "Full Stack Developer", avatar: "MC" },
  { name: "Elena Rodriguez", role: "Product Manager", avatar: "ER" },
];

const Team: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-16 underline decoration-indigo-500 decoration-4 underline-offset-8">
          Meet the Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xl font-bold mb-6">
                {member.avatar}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {member.name}
              </h3>
              <p className="text-indigo-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
