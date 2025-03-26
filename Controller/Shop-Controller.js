const Products = require('../Model/Product-Model')
const Cart = require('../Model/Cart-Model')






exports.getMainPage = (req, res)=>{
    Products.fetchAllProduct(product=>{
        res.render('HomePage.ejs', ({
            pageTitle : 'Home Page',
            allProds : product
        }))
    })
}


exports.mainPageRender = (req, res)=>{
    const newProduct = new Products()
    
    newProduct.title = req.body.title;
    newProduct.image = req.body.image;
    newProduct.price = req.body.price;
    newProduct.description = req.body.description;
    newProduct.id = req.body.productId || null


    newProduct.addProducts()
    res.redirect('/')
}   


exports.addToCart = (req, res)=>{
    const productId = req.body.productId
    Products.fetchAllProduct(products=>{
        
        const findPriceIndex = products.findIndex(prod=> prod.id === productId)
        const allProductsList = [...products]
        let findPrice = allProductsList[findPriceIndex].price
        console.log(findPrice, 'find price')
        Cart.addToCart(productId, findPrice)
        res.redirect('/')
    })
    
    }

exports.cartPageRender = (req, res)=>{
    res.redirect('/cart')
}

exports.getCartPage = (req, res)=>{
    let nameArr = []
    Products.fetchAllProduct(products=>{
        Cart.getAllCart(carts=>{

        const totalPriceFinder = carts.totalPrice

        carts?.products?.forEach(elem=>{
            const nameReturner = products?.find(prods=> prods.id === elem.id)
            nameArr.push({title : nameReturner.title, quantity : elem.qty, price : nameReturner.price * elem.qty})
        })
        res.render('CartPage.ejs', ({
            pageTitle : "Cart Page",
            allProds : nameArr || null,
            totals : totalPriceFinder || null
        }))
    })
    })
}