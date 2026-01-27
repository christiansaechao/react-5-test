import React from 'react'
import ProblemCard from '../components/ProblemCard';

export const GroupUsers = () => {
  const users = [
    { id: 1, name: "Ava", role: "admin" },
    { id: 2, name: "Noah", role: "user" },
    { id: 3, name: "Mia", role: "user" },
  ];

  // nums.reduce((acc, user) => { some code here }, default value)

  // let acc = {}

  /* TODO: const grouped = users.reduce((acc, u) => {...}, {} as Record<string, typeof users>) */

  const grouper = users.reduce((acc: any, user: any) => {
    acc[user.role] = [...acc[user.role], user.name]
    acc["user"] = ["Noah", "Mia"]
  }, {
    admin: [],
    user: ["Noah", "Mia"]
  })
  
  return (
    <ProblemCard
      title="Reduce 06 — Group items"
      method="reduce"
      question="Use reduce() to group users by role. (Example: { admin: [...], user: [...] })"
      dataPreview={users}
    >
      <div>
        {
        }
      </div>
    </ProblemCard>
  );
}
