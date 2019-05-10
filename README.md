# FundFinder

This is a fully-functional search page for alumni donation funds. It includes a live search bar and tag functionality, all handled instantly using JavaScript. It is built on **React** and **Fuse**.

## Modifying the Fund Data

The fund data is stored in `src/Data.js`. That file exports two static objects - `funds` and `tags` - which are used by the rest of the application. `funds` stores each fund's name, description, and a list of tags associated with it. `tags` stores each tag's name, the value used on the backend to link tags and funds, and it's title, the name of the tag displayed on the frontend. To modify the fund data, manually change these variables and then rebuild the application.

## Installation and Testing

To install this application, clone this repository and run `npm i` in its directory to install the dependencies. Next, run `npm start` to start a React server with hot reloading. Then navigate to `localhost:3000` to see the application in action.

## Deployment

To deploy this application, run `npm build` to produce a static website in the `build` directory. Then run the command `git subtree push --prefix build origin gh-pages` to push that subtree to the `gh-pages` branch, so that your updates are reflected in the static website.

## Contact

Reach out to `undercase` with questions, comments, or concerns.
