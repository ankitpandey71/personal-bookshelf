import React, { createContext, useState, useEffect } from "react";

const ContextApi = createContext();

export const BookshelfProvider = ({ children }) => {
  const [bookshelf, setBookshelf] = useState(() => {
    return JSON.parse(localStorage.getItem("bookshelf")) || [];
  });

  useEffect(() => {
    localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
  }, [bookshelf]);

  return (
    <ContextApi.Provider value={{ bookshelf, setBookshelf }}>
      {children}
    </ContextApi.Provider>
  );
};

export default ContextApi;
