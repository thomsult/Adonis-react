/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route, { ResourceRouteNames } from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ inertia }) => {
  //return await inertia.render('app', )
  return { name: 'John Doe' }
})

const prefix = 'api'
const routes = ['index', 'store', 'show', 'update', 'destroy'] as ResourceRouteNames[]

Route.group(() => {
  Route.resource('enterprise', 'EntreprisesController').only(routes)
  Route.resource('service', 'ServicesController').only(routes)
  Route.resource('personne', 'PersonnesController').only(routes)
})
  .prefix(prefix)
  .where('id', /^[0-9]+$/) // id must be a number
