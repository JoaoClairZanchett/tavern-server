import { Request, Response } from 'express';
import knex from '../database/connection';

class ClassesController {

    index = async (request: Request, response: Response) => { 
        const classes = await knex('classes'); 

        return response.json({classes});
    }

    getBySystem = async (request: Request, response: Response) => {
        const { id } = request.params;

        const classes  = await knex('classes')
            .join('class_system', 'classes.id', '=', 'class_system.class_id')
            .where('class_system.system_id', id)
            .select('classes.*');

        return response.json({
            ...classes
        })
    }

}

export default ClassesController;