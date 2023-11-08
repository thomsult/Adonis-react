import { DateTime } from 'luxon'
import {
  BaseModel,
  HasMany,
  HasManyThrough,
  column,
  hasMany,
  hasManyThrough,
} from '@ioc:Adonis/Lucid/Orm'
import Service from './Service'
import Personne from './Personne'

export default class Entreprise extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  @hasMany(() => Service)
  public Service: HasMany<typeof Service>

  @column()
  @hasMany(() => Personne)
  public Personne: HasMany<typeof Personne>
}
