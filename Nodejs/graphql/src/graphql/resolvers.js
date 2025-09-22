import products from "../data/products.js";

const resolvers = {
  Query: {
    products: () => products,
    product: (_, { id }) => products.find(item => item.id === id)

  },

  Mutation: {
    createProduct: (_,{ title, category, inStock, price}) => {
      const newProduct = {
        id: String(products.length + 1),
        title,
        category,
        inStock,
        price
      }

      products.push(newProduct);
      return newProduct;
    },
    deleteProduct: (_, { id }) => {
    const index = products.findIndex(item => item.id === id);
    products.splice(index, 1);
    if (index === -1) return false
    return true;
  }
  }
  
}


export default resolvers;