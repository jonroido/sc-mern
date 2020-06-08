## Configuration

Copy your mongodbURI

server/config/keys.js

```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE",
  secretOrKey: "secret"
};
```

## Quick Start

Type this in terminal/cmd

```javascript
// for server
cd server
npm i bcryptjs body-parser concurrently express is-empty 
npm i jsonwebtoken mongoose passport passport-jwt validator
cd ..

//for client
cd client
npm i
npm i is-empty
cd ..

// Run client & server with concurrently
npm run dev

// if you have problem in no module concurrently
npm install -g concurrently 
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000
```
HAPPY DEV!