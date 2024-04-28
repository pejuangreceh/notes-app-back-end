const Hapi = require('@hapi/hapi');
const routes = require('./routes');
 
const init = async () => {
const server = Hapi.server({
  port: 5000,
  host: 'localhost',
  routes: {
    cors: {
      origin: ['http://notesapp-v1.dicodingacademy.com'], // an array of origins or 'ignore'
      headers: ['Authorization'], // an array of strings - 'Access-Control-Allow-Headers'
      exposedHeaders: ['Accept'], // an array of exposed headers - 'Access-Control-Expose-Headers',
      additionalExposedHeaders: ['Accept'], // an array of additional exposed headers
      maxAge: 60,
      credentials: true // boolean - 'Access-Control-Allow-Credentials'
    }
  },
});

server.route(routes);
 
await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();