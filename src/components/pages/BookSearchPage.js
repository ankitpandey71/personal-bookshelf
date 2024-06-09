import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ContextApi from "../ContextApi";

function BookSearchPage() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const { bookshelf, setBookshelf } = useContext(ContextApi);

  useEffect(() => {
    if (query.length > 2) {
      axios
        .get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then((response) => {
          setBooks(response.data.docs);
        });
    } else {
      setBooks([]);
    }
  }, [query]);

  const addToBookshelf = (book) => {
    const newBookshelf = [...bookshelf, book];
    setBookshelf(newBookshelf);
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Book Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a book..."
        className="border p-2 mb-4 w-full"
      />
      <div className="flex flex-wrap -mx-2">
        {books.map((book) => (
          <div
            key={book.key}
            className="border p-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mx-2 mb-4"
          >
            <h2 className="text-xl">{book.title}</h2>
            <p>{book.author_name?.join(", ")}</p>
            <button
              onClick={() => addToBookshelf(book)}
              className="mt-2 bg-blue-500 text-white p-2"
            >
              Add to Bookshelf
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookSearchPage;
