const fs = require('fs')
const path = require('path')

const paths = path.join(path.dirname(process.mainModule.filename), "Data", "products.json")


const fetchAllProductsfromJson = cb =>{
    fs.readFile(paths, (err, fileContent)=>{
        if(!err){
            cb(JSON.parse(fileContent))
        }else{
            cb([])
        }
    })
}



module.exports = class Products{
    constructor(title, image, description, price, id){
        this.title = title,
        this.image = image,
        this.description = description,
        this.price = price,
        this.id = id
    }

    static fetchAllProduct(cb){
        fetchAllProductsfromJson(cb)
    }

    addProducts(){
        fetchAllProductsfromJson(products=>{
            if(this.id){
                const allProd = [...products]
                const findIndex = allProd.findIndex(prod=> prod.id === this.id)
                allProd[findIndex] = this;   
                fs.writeFile(paths, JSON.stringify(allProd), (err)=>{
                    console.log(err, "Error writing file !!")
                })
            }else{  
            this.id = Math.random().toString()
            products.push(this)
            fs.writeFile(paths, JSON.stringify(products), (err)=>{
                console.log(err, 'Err writing new prods')
            })
        }
        })}

        static deleteProds(id){
            fetchAllProductsfromJson(products=>{
                const filteredProducts = products.filter(prods=> prods.id !== id)
                fs.writeFile(paths, JSON.stringify(filteredProducts), (err)=>{
                    console.log(err)
                })
            })
            
        }


}