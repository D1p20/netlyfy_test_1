// netlify/functions/hello-world.js

// Use CommonJS syntax
exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World!',
    }),
  };
};
