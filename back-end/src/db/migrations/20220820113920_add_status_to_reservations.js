
exports.up = async function(knex) {
    await knex.schema.table("reservations", (table) => {
        table.string("status").defaultTo("booked").notNullable();
      });
};

exports.down = async function(knex) {
    await knex.schema.table("reservations", (table) => {
        table.dropColumn("status");
      });
};
