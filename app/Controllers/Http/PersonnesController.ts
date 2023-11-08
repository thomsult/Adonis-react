// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Personne from 'App/Models/Personne'

export default class PersonnesController {
  public async index() {
    return Personne.query().preload('service').preload('entreprise')
  }
  public async show({ params }) {
    const personne = await Personne.findOrFail(params.id)
    await personne.load('service')
    await personne.load('entreprise')

    return personne
  }
}
