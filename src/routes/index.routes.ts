import { FastifyPluginAsync } from 'fastify';

export const routes: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', (request, reply) => {
    return reply.status(200).send({ message: "Working!"});
  })
}