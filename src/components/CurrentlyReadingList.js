import React from "react";

const CurrentlyReadingList = ({
  currentlyReadingBooks,
  books,
  handleCurrentlyReading,
  handleWantToRead,
  handleRead,
  handleNone,
}) => {
  return (
    <div className="currently-reading-list ps-3">
      <h2>Currently Reading</h2>
      <hr />
      <ul className="d-flex justify-content-center align-items-center text-center flex-wrap">
        {books
          .filter((book) => {
            return currentlyReadingBooks.includes(book.id);
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

export default CurrentlyReadingList;
