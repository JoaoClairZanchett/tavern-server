import Knex from "knex";

export async function up (knex: Knex) {
    return knex.schema.createTable('tendency_system', table => {
        table.increments('id').primary();
        table.integer('tendency_id')
            .notNullable()
            .references('id')
            .inTable('tendencies');

        table.integer('system_id')
            .notNullable()
            .references('id')
            .inTable('systems');
    });
}

export async function down (knex: Knex) {
    return knex.schema.dropTable('tendency_system');
}