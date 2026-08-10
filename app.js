/* eslint-disable @typescript-eslint/no-require-imports */
const next = require("next");

const app = next({
  dev: false,
  hostname: "0.0.0.0",
  port: process.env.PORT || 3000,
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const http = require("http");

  http
    .createServer((req, res) => {
      handle(req, res);
    })
    .listen(process.env.PORT || 3000, "0.0.0.0", () => {
      console.log("Next.js server started");
    });
});