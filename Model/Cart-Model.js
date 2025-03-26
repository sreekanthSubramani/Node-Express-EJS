const fs = require('fs')
const path = require('path')
const Products = require('./Product-Model')

const paths = path.join(path.dirname(process.mainModule.filename), "Data", 'cart.json')


const getAllprodsFromCart = cb =>{
    fs.readFile(paths, (err, fileContent)=>{
        if(!err){
            cb(JSON.parse(fileContent))
        }else{
            cb([])
        }
    })
}

module.exports = class Cart{
    
    static addToCart(id, totalPrice){   
        fs.readFile(paths, (err,fileContent)=>{
            let cart = {products : [], totalPrice : 0}
            if(!err){
                cart = JSON.parse(fileContent)                           
            }
            const findIdOfProduct = cart.products.findIndex(prod=> prod.id == id)
            let allProducts = [...cart.products]
            const selectedProd = allProducts[findIdOfProduct]
            
            let updatedProd;
            
            if(selectedProd){
                updatedProd = {...selectedProd}
                updatedProd.qty = updatedProd.qty + 1
                cart.products[findIdOfProduct] = updatedProd
            }else{
                let newProd = {id : id, qty : 1}
                cart.products = [...cart.products, newProd]
            }
            cart.totalPrice = +cart.totalPrice + +totalPrice

            
            fs.writeFile(paths, JSON.stringify(cart), (err)=>{
                console.log(err)
            })
        })
    }



    static getAllCart(cb){
        getAllprodsFromCart(cb)
    }
}