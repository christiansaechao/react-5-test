/**
 * form: edit
 * 1. first name
 * 2. last name
 * 3. email
 * 4. image
 */

import { useState } from "react";
import { useUser } from "../store/user.store";

interface Person {
  first: string;
  last: string;
  email: string;
  image: string;
}

export const Settings = ({ first, last, email, image }) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  const user = useUser((state) => state.user);
  const updateUser = useUser((state) => state.updateUser);

  async function submitForm() {
    const { response, error } = await supabase.update("Users").data(firstName, lastName);

    if (error) {
      throw new Error(error);
    }

    updateUser(response);
  }

  return (
    <>
      <form onSubmit={submitForm}>
        <div>{user.firstName}</div>
        <button>Edit</button>

        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="firstName"
        />

        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="lastName"
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
