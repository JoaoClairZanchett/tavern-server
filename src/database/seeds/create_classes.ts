import Knex from "knex";

export async function seed(knex: Knex) {
    await knex('classes').insert([
        {
            name: 'Bárbaro',
            description: 'Bárbaros são guerreiros tribais rústicos e naturais, geralmente vivem em clãs ou tribos, em lugares selvagens onde a força bruta e a coragem são parâmetros de liderança.'
        },
        {
            name: 'Bardo',
            description: 'O bardo é um artista que se utiliza de magia para aprimorar a sua arte. '
        },
        {
            name: 'Clérigo',
            description: 'Servo das muitas forças divinas que atuam sobre o universo, recebendo poderes mágicos em troca.'
        },
        {
            name: 'Druída',
            description: 'Guardião do mundo natural e devoto das forças selvagens, sejam naturais ou monstruosas.'
        },
        {
            name: 'Feiticeiro',
            description: 'Servo das muitas forças divinas que atuam sobre o universo, recebendo poderes mágicos em troca.'
        },
        {
            name: 'Clérigo',
            description: 'Servo das muitas forças divinas que atuam sobre o universo, recebendo poderes mágicos em troca.'
        },
        {
            name: 'Feiticeiro',
            description: 'Herdeiro de uma linhagem arcana, com dom natural para a magia.'
        },
        {
            name: 'Guerreiro',
            description: 'Guerreiros são exímios lutadores marciais, sempre prontos para o combate. Possuem extremas habilidades de combate.'
        },
        {
            name: 'Ladino',
            description: 'Aventureiro cheio de truques, confi ando mais em agilidade e esperteza que em força bruta.'
        },
        {
            name: 'Mago',
            description: 'Um sábio estudioso das artes arcanas, e senhor de grandes poderes.'
        },
        {
            name: 'Monge',
            description: 'Artista marcial, mestre do combate desarma-do e técnicas secretas.'
        },
        {
            name: 'Paladino',
            description: 'Campeão do bem e ordem, o perfeito soldado dos deuses.'
        },
        {
            name: 'Ranger',
            description: 'Caçador de monstros e mestre da sobrevivência em áreas selvagens.'
        },
        {
            name: 'Samurai',
            description: 'Herdeiro  de  tradições  milenares  e  portador  de espadas ancestrais.'
        },
        {
            name: 'Swashbuckler',
            description: 'Lutador inconsequente e galante, que se aventura pela emoção do perigo.'
        },
    ])
}