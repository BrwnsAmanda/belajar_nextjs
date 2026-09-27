"use client";

import UserCard from "@/components/UserCard";
import { Heart } from "lucide-react";

import { useUser } from "@/context/UserContext";

export default function FavoritesPage() {
  const { favorites } = useUser();

  return (
    <section className="relative">
      <div className="bg-grid bg-radial-fade absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary">Collection</p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            Favorite Users
          </h1>

          <p className="mt-4 text-muted-foreground">
            Users you have saved as your favorites.
          </p>
        </div>

        {favorites.length > 0 ? (
          <>
            <div className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="size-4" />
              <span>
                {favorites.length}{" "}
                {favorites.length === 1 ? "user" : "users"} saved
              </span>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {favorites.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          </>
        ) : (
          <div className="mt-12 flex flex-col items-center gap-3 py-16 text-center text-muted-foreground">
            <Heart className="size-8" />

            <h2 className="font-semibold text-foreground">
              No favorite users yet
            </h2>

            <p className="text-sm">
              Add users to your favorites from the User Directory.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}