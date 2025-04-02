import { fastify } from 'fastify';
import { fastifyCors } from "@fastify/cors";
import { routes } from './routes/index.routes';

const app = fastify();

app.register(fastifyCors);

app.register(routes, { prefix: '/api'})

app.listen({ port: 3333 }, () => {
  console.log('HTTP Server is runnin!')
});
