import fastify, { FastifyInstance } from "fastify";
import {user} from "./userRouts";

const app :FastifyInstance = fastify({logger: false});

app.register(user);

app.get('/', async (request, reply) => {
    reply.send('Hello word')
})

app.listen({port: 3000})
