import { DateTime } from 'luxon'
import { BaseModel, Has, HasMany, HasOne, column, hasMany, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Personne from './Personne'

export default class Service extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column({
    serializeAs: null,
  })
  public entrepriseId: number

  @column({
    serializeAs: null,
  })
  public serviceId: number

  @column()
  @hasOne(() => Personne, {
    onQuery: (query) => {
      return query.where('role', 'Chef de Service')
    },
  })
  public chefService: HasOne<typeof Personne>

  @column()
  @hasMany(() => Personne, {
    onQuery: (query) => {
      return query.where('role', 'Employé')
    },
  })
  public personByService: HasMany<typeof Personne>
}
