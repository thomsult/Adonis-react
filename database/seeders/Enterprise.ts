import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Entreprise from 'App/Models/Entreprise'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run() {
    await Entreprise.createMany([
      {
        id: 1,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        id: 2,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        id: 3,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
    ])
  }
}
