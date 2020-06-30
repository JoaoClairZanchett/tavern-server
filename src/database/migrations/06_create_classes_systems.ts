import Knex from "knex";

export async function up (knex: Knex) {
    return knex.schema.createTable('class_system', table => {
        table.increments('id').primary();
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes');

        table.integer('system_id')
            .notNullable()
            .references('id')
            .inTable('systems');
    });
}

export async function down (knex: Knex) {
    return knex.schema.dropTable('class_system');
}