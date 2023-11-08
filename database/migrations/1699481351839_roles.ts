import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'personnes'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.renameColumn('Role', 'role')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
