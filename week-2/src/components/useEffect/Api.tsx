import { useEffect, useState } from "react";

// https://randomuser.me/api/?results=10

/**
 * Goal: Fetch when dependency changes.
    - Task: fetch from a public API on component render. Store the data in state, map over data and display users, style component
    - Constraints:
        - Show loading state.
        - Show error state.
 */

type User = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
};

type UsersType = User[];

export const Api = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState<UsersType>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://randomuser.me/api/?results=10"
        ).then((res) => res.json());

        if (response.results.length > 0) {
          setUsers(response.results);
        }
        setLoading(false);
      } catch {
        console.log("error");
        setError(true);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error getting user data</div>;
  }

  return (
    <>
      <div>
        {/* loop over data: firstname, lastname, gender*/}
        {users.map((user) => {
          return (
            <div key={user.name.first}>
              <div>
                {user.name.first} {user.name.last}
              </div>
              <div>{user.gender} {user.email}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};




