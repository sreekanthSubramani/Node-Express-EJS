const OrderJson = require('../Model/Order-Page')
const Products = require('../Model/Product-Model')
const Cart = require('../Model/Cart-Model')

const express = require('express')
const shopRouter = express.Router()
const shopController = require('../Controller/Shop-Controller')


shopRouter.get('/', shopController.getMainPage)
shopRouter.post('/', shopController.mainPageRender)
shopRouter.post('/cart', shopController.addToCart)
shopRouter.post('/cartItems', shopController.cartPageRender)
shopRouter.get('/cart', shopController.getCartPage)

module.exports = shopRouter;