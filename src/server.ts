import { fastify } from 'fastify';
import { fastifyCors } from "@fastify/cors";

const app = fastify();

app.register(fastifyCors, { origin: "*" });

app.get('/', (request, reply) => {
  return reply.status(200).send({ message: "Hello World!"});
});

app.listen({ port: 3333 }, () => {
  console.log('HTTP Server is runnin!')
});
