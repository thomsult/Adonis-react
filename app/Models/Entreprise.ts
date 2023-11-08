import { DateTime } from 'luxon'
import {
  BaseModel,
  HasMany,
  HasManyThrough,
  HasOne,
  column,
  computed,
  hasMany,
  hasManyThrough,
  hasOne,
} from '@ioc:Adonis/Lucid/Orm'
import Service from './Service'
import Personne from './Personne'

export default class Entreprise extends BaseModel {
  @column({ isPrimary: true, serializeAs: null })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  @hasMany(() => Service)
  public Service: HasMany<typeof Service>

  @column({})
  @hasOne(() => Personne, {
    onQuery: (query) => {
      return query.where('role', 'Dirigeant')
    },
  })
  public dirigeants: HasOne<typeof Personne>

  @column()
  @hasMany(() => Personne, {
    onQuery: (query) => {
      return query.whereNotNull('service_id').andWhereNot('role', 'Dirigeant')
    },
    serializeAs: 'personnes',
  })
  public Personne: HasMany<typeof Personne>

  @computed()
  public get nbEmployer() {
    const employer = this.$preloaded.Personne
    if (!employer) return 0
    const nb = Array.isArray(employer) ? employer.length : 1
    return nb
  }
  @computed()
  public get name() {
    return 'Entreprise ' + this.id
  }
}
