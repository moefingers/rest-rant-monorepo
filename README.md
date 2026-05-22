<!-- unlv-museum-banner-start -->
<a href="https://unlv-museum.infinite-syndicate.com/rest-rant" target="_blank" rel="noopener">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://unlv-museum.infinite-syndicate.com/github-banners/rest-rant?theme=dark&v=02e3c2ac85">
    <img src="https://unlv-museum.infinite-syndicate.com/github-banners/rest-rant?theme=light&v=02e3c2ac85" alt="Restaurant rating and review monorepo from May 2024 — a CRA + React Router SPA paired with an Express + Sequelize + Postgres backend. The museum preserves the frontend as-is and reimplements the backend in Next.js + Drizzle so the SPA functions end-to-end against the same API surface." width="100%">
  </picture>
</a>

> This `museum-ready/original` branch is the host-compatible build of the [`original` branch](https://github.com/moefingers/rest-rant-monorepo/tree/original) — [audit the diff](https://github.com/moefingers/rest-rant-monorepo/compare/original...museum-ready%2Foriginal): hosting fixes only (dead URLs, Node LTS floor, pnpm), behavior byte-for-byte. [Open in museum →](https://unlv-museum.infinite-syndicate.com/rest-rant)
<!-- unlv-museum-banner-end -->

# Project REST-Rant
REST-Rant is an app where users can review restaurants.

### Setup
First, you'll need a Postgres database to connect to. Follow instructions here to setup the database and save credentials for the next step.

Next create a `.env` file inside of `backend`. It will need to contain the following environment variables (change the values for the database to match what you defined in the previous step)
```
PORT=5000
DB_USERNAME=rest_rant_user
DB_PASSWORD=password
DB_DATABASE=rest_rant
```

Next `cd` into `backend` and run `npm install` to install dependencies for the API.

Next, `cd` into `frontend`, and run `npm install` to install dependencies for the React app.

Finally, in separate terminals, run `npm start` in each folder so that the API and React app are running at the same time.

### API (http://localhost:5000)
| Method | Path                                 | Purpose                                   |
| ------ | ------------------------------------ | ----------------------------------------- |
| GET    | /                                    | Home page                                 |
| GET    | /places                              | Places index page                         |
| POST   | /places                              | Create new place                          |
| GET    | /places/:placeId                     | Details about a particular place          |
| PUT    | /places/:placeId                     | Update a particular place                 |
| DELETE | /places/:placeId                     | Delete a particular place                 |
| POST   | /places/:placeId/comments            | Create a comment about a particular place |
| DELETE | /places/:placeId/comments/:commentId | Delete a comment about a particular place |


### App (http://localhost:3000)
| Path                  | Component                 | Purpose                                                                         |
| --------------------- | ------------------------- | ------------------------------------------------------------------------------- |
| /                     | `Home.js`                 | Home page                                                                       |
| /sign-up              | `users/SignUpForm.js`     | Form for creating a new user                                                    |
| /places               | `places/PlaceIndex.js`    | List of places                                                                  |
| /places/new           | `places/NewPlaceForm.js`  | Form for creating a new place                                                   |
| /places/:placeId      | `places/PlaceDetails.js`  | Details of a place, including it's comments, and a form to create a new comment |
| /places/:placeId/edit | `places/EditPlaceForm.js` | Form for editing a place                                                        |