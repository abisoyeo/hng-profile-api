# HNG Profile API

This is a simple RESTful API built for the HNG Internship Stage 0 Task.
It exposes a single endpoint that returns basic profile information along with a dynamic cat fact fetched from an external API.

---

## Features

- Returns your personal profile information (name, email, and tech stack)
- Fetches a random cat fact dynamically from the [Cat Facts API](https://catfact.ninja/fact)
- Implements rate limiting to prevent abuse
- Supports environment-based configuration via `.env`

---

## Installation

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd hng-profile-api
npm install
```

---

## Running the Application

### Development mode

Runs with nodemon (auto restarts on file changes):

```bash
npm run dev
```

### Production mode

```bash
npm start
```

The server runs on the port defined in your `.env` file (defaults to 3000).

---

## Environment Variables

Create a `.env` file in the project root and include the following:

```
PORT=3000
EMAIL=<your_email>
NAME=<your_name>
STACK=<your_tech_stack>
NODE_ENV=development
```

---

## Dependencies

| Package                                                                | Description                                                       |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [axios](https://www.npmjs.com/package/axios)                           | Promise-based HTTP client for Node.js                             |
| [dotenv](https://www.npmjs.com/package/dotenv)                         | Load environment variables from `.env`                            |
| [express](https://www.npmjs.com/package/express)                       | Web framework for Node.js                                         |
| [express-rate-limit](https://www.npmjs.com/package/express-rate-limit) | Middleware for rate limiting                                      |
| [http-errors](https://www.npmjs.com/package/http-errors)               | Create standardized HTTP errors                                   |
| [nodemon](https://www.npmjs.com/package/nodemon)                       | Tool for automatically restarting Node.js apps during development |

---

## API Endpoint

### `GET /me`

#### Example Response

```json
{
  "full_name": "Abisoye Ogunmona",
  "email": "ogunmonaa@gmail.com",
  "stack": "Node.js/Express, C#/ASP.NET Core",
  "cat_fact": "Cats sleep 70% of their lives."
}
```
