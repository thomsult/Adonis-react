import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Service from 'App/Models/Service'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run() {
    await Service.createMany([
      {
        id: 1,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
        entrepriseId: 1,
      },
      {
        id: 2,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
        entrepriseId: 2,
      },
      {
        id: 3,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
        entrepriseId: 1,
        serviceId: 1,
      },
    ])
  }
}
