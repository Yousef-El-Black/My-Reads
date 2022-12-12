import "../App.css";
import { Routes, Route } from "react-router-dom";
import MyReads from "./MyReads";
import SearchPage from "./SearchPage";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";

function App() {
  // All Books
  const [books, setBooks] = useState([]);

  // The Query In Search Bar
  const [query, setQuery] = useState("");

  // All Books You can search about
  const [searchedBooks, setSearchedBooks] = useState([]);

  // All Books in Currently Reading Shelf
  const [currentlyReading, setCurrentlyReading] = useState([]);

  // All Books in Want To Read Shelf
  const [wantToRead, setWantToRead] = useState([]);

  // All Books in Read Shelf
  const [read, setRead] = useState([]);

  // Handle Currently Reading Shelf
  const handleCurrentlyReading = (book) => {
    // setCurrentlyReading(currentlyReading.concat(book));
    // setWantToRead(
    //   wantToRead.filter((wbook) => {
    //     return wbook.id !== book.id;
    //   })
    // );
    // setRead(
    //   read.filter((rbook) => {
    //     return rbook.id !== book.id;
    //   })
    // );
  };

  // Handle Want To Read Shelf
  const handleWantToRead = (book) => {};

  // Handle Read Shelf
  const handleRead = (book) => {};

  // Handle The Books That Do Not have Shelf
  const handleNone = (book) => {};

  // Handle Search
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  // Clear Search Books List
  const clearSearchedBooks = () => {};

  // Load All Books
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  // Load Currently Reading Shelf
  useEffect(() => {
    setCurrentlyReading(
      books.filter((book) => {
        return book.shelf === "currentlyReading";
      })
    );
  }, [books]);

  // Load Want To Read Shelf
  useEffect(() => {
    setWantToRead(
      books.filter((book) => {
        return book.shelf === "wantToRead";
      })
    );
  }, [books]);

  // Load Currently Reading Shelf
  useEffect(() => {
    setRead(
      books.filter((book) => {
        return book.shelf === "read";
      })
    );
  }, [books]);

  // Change Shelf Function
  const changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  };

  // Load Searched Books
  useEffect(() => {
    if (query !== "" && query.length !== 0) {
      const getSearchedBooks = async () => {
        const res = await BooksAPI.search(query, 30);
        setSearchedBooks(res);
      };
      getSearchedBooks();
    }
  }, [query]);

  useEffect(() => {
    setBooks(books);
  }, [read, currentlyReading, wantToRead, books]);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <MyReads
            read={read}
            wantToRead={wantToRead}
            handleNone={handleNone}
            handleRead={handleRead}
            handleWantToRead={handleWantToRead}
            books={books}
            searchedBooks={searchedBooks}
            currentlyReading={currentlyReading}
            handleCurrentlyReading={handleCurrentlyReading}
            changeShelf={changeShelf}
          />
        }
      />
      <Route
        exact
        path="/search"
        element={
          <SearchPage
            handleCurrentlyReading={handleCurrentlyReading}
            handleWantToRead={handleWantToRead}
            handleRead={handleRead}
            handleNone={handleNone}
            books={books}
            query={query}
            handleSearch={handleSearch}
            searchedBooks={searchedBooks}
            clearSearchedBooks={clearSearchedBooks}
            changeShelf={changeShelf}
          />
        }
      />
    </Routes>
  );
}

export default App;
