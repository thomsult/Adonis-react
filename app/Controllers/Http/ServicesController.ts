// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Service from 'App/Models/Service'

export default class ServicesController {
  public async index() {
    const services = await Service.query()
      .preload('entreprise')
      .preload('chefService')
      .preload('personByService')
      .preload('subService')
    return services
  }
  public async show({ params }) {
    const service = await Service.findOrFail(params.id)
    await service.load('entreprise')
    await service.load('chefService')
    await service.load('personByService')
    await service.load('subService')

    return service
  }
}
