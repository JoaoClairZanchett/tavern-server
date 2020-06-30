import { Request, Response } from 'express';
import knex from '../database/connection';
import UsersService from '../services/UsersService';
class UsersController {
    
    usersService = new UsersService();
    
    create = async (request: Request, response: Response) => {
        
        const {
            name,
            email,
            password,
            adventurerName
        } = request.body;

        const users = await knex('users')
            .where('email', String(email))
            .distinct()
            .select('users.*')

        if(users.length > 0) {
            return response.status(404).json({ message: 'E-mail já cadastrado'});
        }

        const pass = this.usersService.cryptographyPassword(password);

        const user = {
            name,
            email,
            password: pass,
            adventurerName
        }
    
        await knex('users').insert(user);
    
        return response.json({ 
            user
        })
    }

    show = async (request: Request, response: Response) => {
        const { id } = request.params;

        const user = await knex('users').where('id', id).first();

        if(!user) {
            return response.status(404).json({ message: 'User not found'});
        }   

        return response.json({user});
    }

    search = async (request: Request, response: Response) => {
        const { email } = request.body;

        const users = await knex('users')
            .where('email', String(email))
            .distinct()
            .select('users.*')
        
        return response.json(users);
    }

}

export default UsersController;