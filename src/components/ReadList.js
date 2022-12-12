import React from "react";

const ReadList = ({
  readBooks,
  books,
  handleCurrentlyReading,
  handleWantToRead,
  handleRead,
  handleNone,
  changeShelf,
}) => {
  return (
    <div className="currently-reading-list ps-3">
      <h2>Read</h2>
      <hr />
      <ul className="d-flex justify-content-center align-items-center text-center flex-wrap">
        {books
          .filter((book) => {
            return readBooks.includes(book);
          })
          .map((book) => {
            return (
              <li key={book.id} className="book-card m-4">
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
                              handleCurrentlyReading(book);
                              changeShelf(book, "currentlyReading");
                            }}
                          >
                            Currently Reading
                          </button>
                        </li>
                        <li>
                          <button
                            className="btn bg-white"
                            onClick={() => {
                              handleWantToRead(book);
                              changeShelf(book, "wantToRead");
                            }}
                          >
                            Want To Read
                          </button>
                        </li>
                        <li>
                          <button
                            className="btn bg-white"
                            onClick={() => {
                              handleRead(book);
                              changeShelf(book, "read");
                            }}
                          >
                            Read
                          </button>
                        </li>
                        <li>
                          <button
                            className="btn bg-white"
                            onClick={() => {
                              handleNone(book);
                              changeShelf(book, "none");
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
                    {book.authors.join(", ")}
                  </p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ReadList;
