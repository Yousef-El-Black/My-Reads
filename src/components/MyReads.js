import { Link } from "react-router-dom";
import WantToReadList from "./WantToReadList";
import CurrentlyReadingList from "./CurrentlyReadingList";
import ReadList from "./ReadList";

const MyReads = ({
  books,
  currentlyReading,
  handleCurrentlyReading,
  handleWantToRead,
  handleRead,
  handleNone,
  wantToRead,
  read,
}) => {
  return (
    <>
      <header className="w-100 text-center py-3 mb-4 text-white">
        <h1>MyReads</h1>
      </header>
      <CurrentlyReadingList
        books={books}
        currentlyReadingBooks={currentlyReading}
        handleCurrentlyReading={handleCurrentlyReading}
        handleWantToRead={handleWantToRead}
        handleRead={handleRead}
        handleNone={handleNone}
      />
      <WantToReadList
        books={books}
        wantToReadBooks={wantToRead}
        handleCurrentlyReading={handleCurrentlyReading}
        handleWantToRead={handleWantToRead}
        handleRead={handleRead}
        handleNone={handleNone}
      />
      <ReadList
        books={books}
        readBooks={read}
        handleCurrentlyReading={handleCurrentlyReading}
        handleWantToRead={handleWantToRead}
        handleRead={handleRead}
        handleNone={handleNone}
      />
      <Link
        to="/search"
        className="search-btn rounded-circle position-fixed d-flex justify-content-center align-items-center text-decoration-none"
      >
        <span className="fs-1 text-white pb-2">+</span>
      </Link>
    </>
  );
};

export default MyReads;
