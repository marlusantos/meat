
import {Request, Response} from 'express'
import {User, users} from './users'

import * as jwt from 'jsonwebtoken'
import {apiConfig} from './api.config'

export const handleAuthentication = (req: Request, resp: Response)=>{
    const user: User = req.body
    if(isValid(user)){ // se o usuario é valido
        const dbUser = users[user.email] // substituir por query no Banco
        const token = jwt.sign({sub: dbUser.email, iss: 'meat-api'}, apiConfig.secret)
        resp.json({name: dbUser.name, email: dbUser.email, accessToken: token})
    }else{ // 403 informacao invalida, 422 validacao invalida
        resp.status(403).json({message: 'Dados inválidos'})
      // 401 é nao autorizado, e manda dica para o cliente
    }

}

function isValid(user: User): boolean{

    if(!user){ return false}
    const dbUser = users[user.email]

    return dbUser !== undefined && dbUser.matches(user)
}