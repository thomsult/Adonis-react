import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Entreprise from '../../Models/Entreprise'

export default class EntreprisesController {
  public async index({}: HttpContextContract) {
    const entreprises = await Entreprise.query()
      .preload('Service', (query) => {
        query.preload('chefService')
        query.preload('personByService')
      })
      .preload('dirigeants')
      .preload('Personne')

    return entreprises
  }
}
