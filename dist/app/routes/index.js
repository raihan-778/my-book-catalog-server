"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const book_route_1 = require("../modules/book/book.route");
const routes = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/books',
        route: book_route_1.BookRoutes,
    },
    // {
    //   path: '/reviews',
    //   route: ReviewRoutes,
    // },
];
moduleRoutes.forEach(route => routes.use(route.path, route.route)); // by using these "moduleRoute we can create all users route dynamically."
// routes.use('/users/', UserRoutes);
// routes.use('/academic-semester', AcademicsemesterRoutes);
exports.default = routes;
