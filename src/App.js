import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import BookSearchPage from "./components/pages/BookSearchPage";
import BookshelfPage from "./components/pages/BookShelfPage";
import { BookshelfProvider } from "./components/ContextApi";

function App() {
  return (
    <BookshelfProvider>
      <Router>
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<BookSearchPage />} />
            <Route path="/bookshelf" element={<BookshelfPage />} />
          </Routes>
        </div>
      </Router>
    </BookshelfProvider>
  );
}

export default App;
