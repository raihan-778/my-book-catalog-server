import express from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { BookRoutes } from '../modules/book/book.route'

const routes = express.Router()

const moduleRoutes = [
  {
    path: '/',
    route: UserRoutes,
  },
  {
    path: '/books',
    route: BookRoutes,
  },
  // {
  //   path: '/reviews',
  //   route: ReviewRoutes,
  // },
]
moduleRoutes.forEach(route => routes.use(route.path, route.route)) // by using these "moduleRoute we can create all users route dynamically."

// routes.use('/users/', UserRoutes);
// routes.use('/academic-semester', AcademicsemesterRoutes);

export default routes
