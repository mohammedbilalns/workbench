
let product = {
  price: 100,
  discount: 0.2
}

product = new Proxy(product, {
  get(target, prop){
    if(prop === "finalPrice"){
      return target.price * (1 - target.discount)
    }
    return target[prop]
  }
})

product.finalPrice // virtual dynamic propery 
