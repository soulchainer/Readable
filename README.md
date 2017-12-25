# Readable

This app is the final project for Udacity's Redux course where we had to build a content and comment web app. On it, users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

This repository includes the code for the backend API Server that we had to use to develop and interact with the front-end portion of the project.

## Install and launching the project

* Install and start the API server
  - `cd api-server`
  - `npm install` or just `yarn` (I prefer this last one)
  - `node server`
* In another terminal window, just start the front-end (the development server)
  - `npm start`

## Important note

I use [neutrino](https://neutrino.js.org/), not Create React App.
I'm used to it and I really like it.

Also note that for this project I tried for first time the
[re-ducks architecture approach](https://github.com/alexnm/re-ducks).
Several mistakes were made and, on one hand, I regret I made the decission of
using this for this project
(it delayed me SO MUCH, I needed to do everything in a rush at last and I'm not
happy with the final result, there are still errors, but I don't have the time
for fixing them T_T). But, on the other hand, I'm glad for taking this
decission. I really like this approach and I couldn't fiddle with this at work.
I will be using it again in the future and solve the problems I face in this
project and learn from them :).