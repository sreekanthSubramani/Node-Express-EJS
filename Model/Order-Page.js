const Cart = require("./Cart-Model")
const Products = require("./Product-Model")


module.exports = class OrderPage{
    static viewOrderPage(){
        Products.fetchAllProduct(products=>{
            Cart.getAllCart(carts=>{
                let idCarts = []
                const totalsP = carts.totalPrice
                carts.products.forEach(cartItems=>{
                    const findables = products.find(prods=> prods.id === cartItems.id)
                    idCarts.push({title : [findables.title], qty : [cartItems.qty], totals : totalsP })
                    return idCarts
                })
            })
        })
    }
}