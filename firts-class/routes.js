import * as api from './api.js'

export const routes = {
    '':api.Home,
    'products':api.Products,
    'products/add':api.addProduct,
    'products/available':api.productAvailable,
    'users':api.Users,
}