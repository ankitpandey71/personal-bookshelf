import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ContextApi from "../ContextApi";

const BookshelfPage = () => {
  const { bookshelf } = useContext(ContextApi);

  return (
    <div>
      <h1 className="text-2xl mb-4">My Bookshelf</h1>
      <div className="flex flex-wrap -mx-2">
        {bookshelf.map((book, index) => (
          <div
            key={index}
            className="border p-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mx-2 mb-4"
          >
            <h2 className="text-xl">{book.title}</h2>
            <p>{book.author_name?.join(", ")}</p>
          </div>
        ))}
      </div>
      <Link to="/" className="mt-4 inline-block bg-blue-500 text-white p-2">
        Back to Search
      </Link>
    </div>
  );
};

export default BookshelfPage;
