import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Service from './Service'
import Entreprise from './Entreprise'

export default class Personne extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column({ serializeAs: null })
  public entrepriseId: number
  @column({ serializeAs: null })
  public serviceId: number

  @belongsTo(() => Service)
  public service: BelongsTo<typeof Service>

  @belongsTo(() => Entreprise)
  public entreprise: BelongsTo<typeof Entreprise>

  @column()
  public role: Role
}
