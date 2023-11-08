import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Entreprise from 'App/Models/Entreprise'

export default class EntreprisesController {
  private preloadServices(query: any) {
    query
      .preload('chefService')
      .preload('personByService')
      .preload('subService', (subServiceQuery) => {
        this.preloadServices(subServiceQuery)
      })
  }

  public async index({}: HttpContextContract) {
    const entreprises = await Entreprise.query()
      .preload('Service', (serviceQuery) => {
        this.preloadServices(serviceQuery)
      })
      .preload('dirigeants')
      .preload('Personne')

    return entreprises
  }

  public async show({ params }: HttpContextContract) {
    const entreprise = await Entreprise.findOrFail(params.id)
    await entreprise.load('Service', (serviceQuery) => {
      this.preloadServices(serviceQuery)
    })
    await entreprise.load('dirigeants')
    await entreprise.load('Personne')
    return entreprise
  }
}
