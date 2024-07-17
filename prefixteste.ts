import { FastifyInstance } from "fastify";

export async function usersHandler(app: FastifyInstance){
    app.get('/users', (req, res) =>{
        res.send('Rota do usuário')
    })
}