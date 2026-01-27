import ProblemCard from "../components/ProblemCard";

/**
 * Conditionally Render the list of users that are online
 * {conditional ? render this if condtion is met : render if it's not met}
 */

// loose comparison 12 == "12" | strict comparison 12 === 12

export const ConditionalRender = () => {
  const users = [
    { id: 1, name: "Sam", isOnline: true },
    { id: 2, name: "Kai", isOnline: false },
    { id: 3, name: "Tony", isOnline: true },
    { id: 4, name: "Ronald", isOnline: true },
    { id: 5, name: "Sharon", isOnline: false },
  ];

  return (
    <ProblemCard
      title="Map 07 — Conditional rendering inside map"
      method="map"
      question='Render each user with a status: "🟢 Online" or "⚪ Offline".'
      dataPreview={users}
    >

      {/* iteration 1 | user = { id: 1, name: "Sam", isOnline: true } */}
      <ul>
        {users.map((user) =>
          user.isOnline === true ? <li>{user.name} 🟢 Online</li> : <li>{user.name} ⚪ Offline</li>
        )}
      </ul>
    </ProblemCard>
  );
};
