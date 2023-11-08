import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Personne from 'App/Models/Personne'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run() {
    await Personne.createMany([
      {
        id: 1,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
        entrepriseId: 1,
        serviceId: undefined,
      },
      {
        id: 2,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
        entrepriseId: 1,
        serviceId: 1,
      },
      {
        id: 3,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
        entrepriseId: 1,
        serviceId: 3,
      },
      {
        id: 4,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
        entrepriseId: 1,
        serviceId: 1,
      },
      {
        id: 5,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
        entrepriseId: 1,
        serviceId: 1,
      },
      {
        id: 6,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
        entrepriseId: 1,
        serviceId: 1,
      },
      {
        id: 7,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
        entrepriseId: 1,
        serviceId: 3,
      },
      {
        id: 8,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
        entrepriseId: 1,
        serviceId: 3,
      },
    ])

    // Write your database queries inside the run method
  }
}
