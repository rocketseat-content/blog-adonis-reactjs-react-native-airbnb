'use strict'

const Schema = use('Schema')

class PropertySchema extends Schema {
  up () {
    this.create('properties', table => {
      table.increments()
      table
        .integer('user_id')
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('title').notNullable()
      table.string('address').notNullable()
      table.decimal('price').notNullable()
      table.decimal('latitude', 9, 6).notNullable()
      table.decimal('longitude', 9, 6).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('properties')
  }
}

module.exports = PropertySchema
