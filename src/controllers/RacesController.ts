import { Request, Response } from 'express';
import knex from '../database/connection';

class RacesController {

    index = async (request: Request, response: Response) => { 
        const races = await knex('races'); 

        return response.json({races});
    }

    getBySystem = async (request: Request, response: Response) => {
        const { id } = request.params;

        const races  = await knex('races')
            .join('race_system', 'races.id', '=', 'race_system.race_id')
            .where('race_system.system_id', id)
            .select('races.*');

        return response.json({
            races
        })
    }

}

export default RacesController;