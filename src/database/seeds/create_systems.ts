import Knex from "knex";

export async function seed(knex: Knex) {
    await knex('systems').insert([
        {
            name: 'Tormenta',
            description: 'O sistema brasileiro que conquistou o coração de milhares de jogadores. Com uma dinâmica mais simplificada e uma infinidade de complementos, você pode ser o que quiser.'
        },
        {
            name: 'D&D5E',
            description: 'O RPG mais jogado da história. Se procura aventuras épicas em um universo extremamente rico então D&D é o caminho para o seu destino.'
        },
        {
            name: 'Piratas Espaciais',
            description: 'O melhor sistema de RPG não concluído já feito. Da total liberdade para o jogador fazer o que quiser, contanto que o mestre esteja de bom humor.'
        },
    ])
}