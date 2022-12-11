# My Reads

This website was my final project for Udacity's Front-End Web Development Nanodegree. The user of this website can keep track of books that have been read, are being read, or that they want to read.

## Download

You can get a copy of the project that runs on your local computer by following these instructions.

### Prerequisites

- [Git](https://git-scm.com/downloads)
- [npm](https://www.npmjs.com/get-npm)

### Installing

Clone and run the project instructions:

1. Use the command `$ git clone https://github.com/grantiverson/myreads.git` in Terminal to clone the git project.
2. Go to the project's root directory by using your browser.
3. Use the `npm install` command to install the required dependencies.
4. To start the server, type `npm start` into your terminal. Your browser will launch the webpage automatically as a result.

## Built with

- [React](https://reactjs.org/) - Text Editor
- [Create React App](https://github.com/facebookincubator/create-react-app) - React scaffolding package
- [React Router](https://github.com/ReactTraining/react-router) - Declarative routing for React
- [Visual Studio Code](https://code.visualstudio.com/) - Text Editor
- [JavaScript ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming Language
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Markup Language
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) - Styling
- [Bootstarp](https://getbootstrap.com/) - CSS FrameWork
- [Google Chrome](https://www.google.com/chrome/) - Browser and Debugging Tool

### How I made this app

I started by utilising [Create React App](https://github.com/facebookincubator/create-react-app) to scaffold out the app. Then I got [BooksAPI.js](https://github.com/udacity/reactnd-project-myreads-starter/tree/master/src/booksAPI.js) from Udacity, which enables me to access data from a mock server . I created the programme that retrieves an array of books from the Udacity server and then maps the array so that each book is shown on the proper shelf using its unique "shelf" key. Each book includes a "select" tag that enables switching between shelves or completely uninstalling the book. Once I had this feature operating, I included a part that allowed users to look for books to add to the shelf. As a query is submitted, this component immediately does a dynamic search of the server for books whose titles match the input. In order to synchronise the URL with the app's state, I utilised [React Router](https://github.com/ReactTraining/react-router).

## Author

- **Youssef Aboalata Youssef {El-Black}** - [GitHub](https://github.com/Yousef-El-Black)

### Acknowledgements

BooksAPI.js was provided as part of [Udacity's Front-End Web Development Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?gclid=CjwKCAjwq_vWBRACEiwAEReprL6RuGAkBbe7XRljOzu9GYr_zQ70LKtonUz_Qev-z0rf07jmNrZNMRoCF9sQAvD_BwE).
