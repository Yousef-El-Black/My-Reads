import { Link } from "react-router-dom";

const SearchPage = ({
  query,
  books,
  searchedBooks,
  handleCurrentlyReading,
  handleWantToRead,
  handleRead,
  handleNone,
  handleSearch,
  clearSearchedBooks,
}) => {
  return (
    <>
      <nav className="navbar bg-light">
        <form className="container-fluid">
          <div className="input-group">
            <Link
              to="/"
              className="input-group-text btn fs-3"
              id="basic-addon1"
              onClick={() => {
                clearSearchedBooks();
              }}
            >
              &lt;=
            </Link>
            <input
              type="text"
              className="form-control"
              placeholder="Search by title, author, or ISBN"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                handleSearch(e);
              }}
            />
          </div>
        </form>
      </nav>
      <ul className="searched-books-list d-flex flex-wrap">
        {searchedBooks.length === 0 && (
          <h1 className="text-center w-100 p-4">No Result</h1>
        )}
        {searchedBooks.length > 0 &&
          searchedBooks.map((book) => {
            return (
              <li key={book.id} className="book-card m-4 list-style-none">
                <div>
                  <div className="img-container">
                    <img src={book.imageLinks.thumbnail} alt="" />
                    <div className="dropdown">
                      <button
                        className="btn rounded-circle dropdown-toggle text-white"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      ></button>
                      <ul className="dropdown-menu">
                        <li>
                          <button
                            className="btn bg-white"
                            onClick={() => {
                              handleCurrentlyReading(book.id);
                            }}
                          >
                            Currently Reading
                          </button>
                        </li>
                        <li>
                          <button
                            className="btn bg-white"
                            onClick={() => {
                              handleWantToRead(book.id);
                            }}
                          >
                            Want To Read
                          </button>
                        </li>
                        <li>
                          <button
                            className="btn bg-white"
                            onClick={() => {
                              handleRead(book.id);
                            }}
                          >
                            Read
                          </button>
                        </li>
                        <li>
                          <button
                            className="btn bg-white"
                            onClick={() => {
                              handleNone(book.id);
                            }}
                          >
                            None
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h4 className="text-start">{book.title}</h4>
                  <p className="text-start text-black-50">
                    {book.authors && book.authors.join(", ")}
                  </p>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default SearchPage;
