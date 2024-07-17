import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

 export async function user(fastify: FastifyInstance) {
    
    fastify.get('/user/:id', (req : FastifyRequest, reply : FastifyReply) => {
        const {id}  = req.params;
        reply.send(`Página do usuário ${id}`)
    })
}

interface Ireq {
    id: string
}