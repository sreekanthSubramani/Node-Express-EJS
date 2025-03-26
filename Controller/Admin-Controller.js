const Products = require('../Model/Product-Model')

exports.getAddProdsPage = (req, res)=>{
    res.render('AddProducts.ejs', ({
        pageTitle : 'Add Product Page',
    }))   
}

exports.adminPageRenderer = (req, res)=>{
    Products.fetchAllProduct(product=>{
        res.render('AdminProds.ejs', ({
            pageTitle : 'Admin Page',
            allProds : product
        }))
    })
}

exports.uniqueProdsRender = (req, res)=>{
    const productId = req.body.productId
    Products.fetchAllProduct(product=>{
        const uniques = product.find(prods=> prods.id == productId)    
        res.render('EditableProds.ejs', ({
            pageTitle : "Edit Page",
            allProd : uniques
        })) 
    })

}

exports.deleteProds = (req, res)=>{
    const productId = req.body.productId;
    Products.deleteProds(productId)
    res.redirect('/')
}