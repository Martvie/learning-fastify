import fastify, { FastifyInstance } from "fastify";
import {user} from "./userRouts";
import { usersHandler } from "./prefixteste";

const app :FastifyInstance = fastify({logger: false});

app.register(user);
app.register(usersHandler, {prefix: '/v1'});

app.get('/', async (request, reply) => {
    reply.send('Hello word')
})

app.listen({port: 3000})
