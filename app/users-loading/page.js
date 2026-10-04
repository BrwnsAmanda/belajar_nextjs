"use client";

import { useEffect, useState } from "react";

export default function UsersLoadingPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">
        Users
      </h1>

      <div className="mt-6 space-y-2">
        {users.map((user) => (
          <p key={user.id}>
            {user.name}
          </p>
        ))}
      </div>
    </main>
  );
}