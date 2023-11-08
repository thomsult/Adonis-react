import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Entreprise from '../../Models/Entreprise'

export default class EntreprisesController {
  public async index({}: HttpContextContract) {
    const entreprises = await Entreprise.query().preload('Service').preload('Personne')

    return entreprises
  }
}
