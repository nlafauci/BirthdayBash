# Birthday Bash
Birthday Bash is an online service where users can add, view, and get a list of their frieds' birthdays. 

### Setup
First, you'll need a Postgres database to connect to. Follow instructions here to setup the database and save credentials for the next step.

Next create a `.env` file inside of `backend`. It will need to contain the following environment variables (change the values for the database to match what you defined in the previous step)
```
PORT=5000
PG_URI=postgres://[PG Username]:[PG Password]@localhost:5432/birthdaybash
```

Next `cd` into `backend` and run `npm install` to install dependencies for the API.

Next, `cd` into `frontend`, and run `npm install` to install dependencies for the React app.

Finally, in separate terminals, run `npm start` in each folder so that the API and React app are running at the same time.

### API (http://localhost:5000)
| Method | Path                                 | Purpose                                   |
| ------ | ------------------------------------ | ----------------------------------------- |
| GET    | /                                    | Birthdays Dashboard                       |
| GET    | /friends                             | Index of all Friends added to the program.|
| POST   | /friends                             | Add a new Friend to the program.          |
| GET    | /friends/:friendId                   | Details about a particular friend.        |
| PUT    | /friends/:friendId                   | Update a particular friend.               |
| DELETE | /friends/:friendId                   | Delete a particular friend.               |


### App (http://localhost:3000)
| Path                  | Component                 | Purpose                                                                         |
| --------------------- | ------------------------- | ------------------------------------------------------------------------------- |
| /                     | `Home.js`                 | Home page                                                                       |
| /sign-up              | `users/SignUpForm.js`     | Form for creating a new user                                                    |
| /friends               | `friends/FriendIndex.js`    | List of friends                                                                  |
| /friends/new           | `friends/NewFriendForm.js`  | Form for creating a new friends                                                   |
| /friends/:friendId      | `friends/FriendDetails.js`  | Details of a friend and a form to create a new note |
| /friends/:friendId/edit | `friends/EditFriendForm.js` | Form for editing a friend's details                                                        |