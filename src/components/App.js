import "../App.css";
import { Routes, Route } from "react-router-dom";
import MyReads from "./MyReads";
import SearchPage from "./SearchPage";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);

  const handleCurrentlyReading = (bookId) => {
    if (!currentlyReading.includes(bookId)) {
      setCurrentlyReading(currentlyReading.concat(bookId));
    }
    setRead(
      read.filter((book) => {
        return book !== bookId;
      })
    );
    setWantToRead(
      wantToRead.filter((book) => {
        return book !== bookId;
      })
    );
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleWantToRead = (bookId) => {
    if (!wantToRead.includes(bookId)) {
      setWantToRead(wantToRead.concat(bookId));
    }
    setRead(
      read.filter((book) => {
        return book !== bookId;
      })
    );
    setCurrentlyReading(
      currentlyReading.filter((book) => {
        return book !== bookId;
      })
    );
  };

  const handleRead = (bookId) => {
    if (!read.includes(bookId)) {
      setRead(read.concat(bookId));
    }
    setCurrentlyReading(
      currentlyReading.filter((book) => {
        return book !== bookId;
      })
    );
    setWantToRead(
      wantToRead.filter((book) => {
        return book !== bookId;
      })
    );
  };

  const handleNone = (bookId) => {
    setCurrentlyReading(
      currentlyReading.filter((book) => {
        return book !== bookId;
      })
    );
    setWantToRead(
      wantToRead.filter((book) => {
        return book !== bookId;
      })
    );
    setRead(
      read.filter((book) => {
        return book !== bookId;
      })
    );
  };

  const clearSearchedBooks = () => {
    setSearchedBooks([]);
  };

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
    const getSearchedBooks = async () => {
      const res = await BooksAPI.search(query);
      if (res.length > 0) {
        setBooks(books.concat(res));
        setSearchedBooks(res);
      } else {
        setSearchedBooks([]);
        setBooks([]);
      }
    };
    if (query.trim() !== "" || query.length !== 0) {
      getSearchedBooks();
    } else if (searchedBooks.length === 0) {
      console.log("No Result");
    } else {
      setSearchedBooks([]);
      setBooks([]);
    }
  }, [query]);

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
          />
        }
      />
    </Routes>
  );
}

export default App;
