import Knex from "knex";

export async function up (knex: Knex) {
    return knex.schema.createTable('race_system', table => {
        table.increments('id').primary();
        table.integer('race_id')
            .notNullable()
            .references('id')
            .inTable('races');

        table.integer('system_id')
            .notNullable()
            .references('id')
            .inTable('systems');
    });
}

export async function down (knex: Knex) {
    return knex.schema.dropTable('race_system');
}