# basicMEANOAuth
Basic Auth using the mean stack
Credits to https://github.com/sitepoint-editors/MEAN-stack-authentication
PR: 

Set-up
==========================
* Clone the repo: `git clone 
* Navigate to the `client` directory, run `npm install && npm start`.
* Navigate to root directory and run `npm install`. Then run `PORT=4200 npm start` to start the API server.
* Open http://localhost:4200 to see the application
* `npm install` in root directory and run `PORT=4200 npm start` to start the express server hosting the APIs
* Login into MongoLab Account: 
Username: `bob2007zhang@gmail.com`
Password: `.+@2b>ud3]n2G6]8}G7>43B#7*uJ2h`

What I decided to use open source
================================
- I am not familiar with Angular, and it has been a while since I used Node for authentication.
Therefore, I don't think I would have been able to get very far

What I tried to add
================================
- Attempted to add mail service to send out email via nodemailer.
Blocker: I codl not get a valid accoutn send up to smtp mails service

- Added a profiles/ api to get all users to feed into the admin dashboard.
Blocker: Ran out of time trying to figure out how to use Angular to pass data to route

