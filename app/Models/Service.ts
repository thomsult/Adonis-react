import { DateTime } from 'luxon'
import { BaseModel, Has, HasMany, HasOne, column, hasMany, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Personne from './Personne'
import Entreprise from './Entreprise'

export default class Service extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public entrepriseId: number

  @column()
  @hasOne(() => Entreprise, {
    foreignKey: 'id',
    localKey: 'entrepriseId',
  })
  public entreprise: HasOne<typeof Entreprise>

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

  @column()
  @hasMany(() => Service, {
    foreignKey: 'serviceId',
    localKey: 'id',
  })
  public subService: HasMany<typeof Service>
}
