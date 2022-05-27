// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsToMany(Category, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'tag'
});

// Categories have many Products
Category.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'product_tag'
});


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Tag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'tag'
});

// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Product,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'product'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
