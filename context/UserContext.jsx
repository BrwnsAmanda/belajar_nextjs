"use client";

import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

export function UserProvider({ children }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Menyimpan user yang di-favorite
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (user) => {
    setFavorites((currentFavorites) => {
      // Jangan tambahkan user yang sudah ada
      if (currentFavorites.some((favorite) => favorite.id === user.id)) {
        return currentFavorites;
      }

      return [...currentFavorites, user];
    });
  };

  const removeFavorite = (userId) => {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((favorite) => favorite.id !== userId)
    );
  };

  const isFavorite = (userId) => {
    return favorites.some((favorite) => favorite.id === userId);
  };

  const value = {
    name,
    email,
    message,
    submitted,
    setName,
    setEmail,
    setMessage,
    setSubmitted,

    // Favorite
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser harus dipakai di dalam <UserProvider>");
  }

  return context;
}