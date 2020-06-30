import Knex from "knex";

export async function seed(knex: Knex) {
    await knex('races').insert([
        {
            name: 'Anão',
            description: 'Povo recluso e próximo das montanhas e rochas.'
        },
        {
            name: 'Elfos',
            description: 'Esta raça antiga e mágica foi uma das primeiras criadas pelos  deuses. '
        },
        {
            name: 'Goblins',
            description: 'Estes  pequenos  humanoides  são  bastante  temidos  em  regiões selvagens, onde espreitam em grandes bandos e atacam  humanos.'
        },
        {
            name: 'Halflings',
            description: 'Se existe um povo amante do conforto, são os halfl ings.'
        },
        {
            name: 'Humanos',
            description: 'Com  sua  inesgotável  energia,  determinação  e  ambição,  os  humanos  reinam  absolutos.'
        },
        {
            name: 'Lefou',
            description: 'A  mácula  da  Tormenta  sobre  Arton  tem  sido  cada  vez  maior.'
        },
        {
            name: 'Minotauros',
            description: 'São uma raça guerreira e orgulhosa, que venera a força física.'
        },
        {
            name: 'Qareen',
            description: 'Também conhecidos como meio-gênios, os qareen são descendentes de humanos e seres mágicos — não necessariamente  gênios,  mas  também  fadas,  ninfas  e  outros.  '
        },
    ])
}