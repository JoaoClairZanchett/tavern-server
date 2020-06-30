import { Request, Response } from 'express';
import knex from '../database/connection';

class SystemsController {

    index = async (request: Request, response: Response) => { 
        const systems = await knex('systems'); 

        return response.json({systems});
    }

    show = async (request: Request, response: Response) => {
        const { id } = request.params;

        const system = await knex('systems').where('id', id).first();

        if(!system) {
            return response.status(404).json({ message: 'Systema não encontrado'});
        }

        const classes  = await knex('classes')
            .join('class_system', 'classes.id', '=', 'class_system.class_id')
            .where('class_system.system_id', id)
            .select('classes.*');

        const races  = await knex('races')
            .join('race_system', 'races.id', '=', 'race_system.race_id')
            .where('race_system.system_id', id)
            .select('races.*');
        
        system.classes = classes;
        system.races = races;

        return response.json({
            system
        });
    }

}

export default SystemsController;