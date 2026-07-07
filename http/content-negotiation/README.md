# HTTP Content Negotiation Demo

Small demo project for learning how the `Accept` request header can change a server response.

The backend exposes a single endpoint at `/data` and returns either JSON or plain text based on the incoming `Accept` header. The frontend provides two buttons that send requests with different `Accept` values so you can observe the behavior.

## Project Structure

```text
.
├── backend
│   ├── package.json
│   ├── pnpm-lock.yaml
│   └── server.js
└── frontend
    ├── index.html
    └── index.js
```

## How It Works

The backend checks `req.headers.accept` in `backend/server.js`:

- `application/json` returns a JSON response
- `text/plain` returns plain text
- anything else returns a JSON message saying `"Unsupported Media Type"`

The frontend sends requests to `http://localhost:3000/data`:

- `Send Json Request` sends `Accept: application/json`
- `Send text request` sends `Accept: text/plain`

The response is currently logged in the browser console.

## Run the Demo

### 1. Install backend dependencies

```bash
cd backend
pnpm install
```

### 2. Start the backend server

```bash
node server.js
```

The server listens on `http://localhost:3000`.

### 3. Open the frontend

Open `frontend/index.html` in a browser.

Then:

1. Open the browser developer console.
2. Click one of the buttons.
3. Inspect the logged response.


