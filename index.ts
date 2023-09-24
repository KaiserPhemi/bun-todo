const server = Bun.serve({
  port: process.env.PORT,
  fetch(req) {
    return new Response("Hello Bun!");
  },
});

console.log(`Listening on ${server.port}...`)