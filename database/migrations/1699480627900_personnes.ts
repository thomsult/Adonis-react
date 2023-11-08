import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'personnes'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('Role').defaultTo('Employé')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
