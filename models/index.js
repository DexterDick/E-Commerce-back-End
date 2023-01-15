// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");
const { belongsToMany } = require("./Product");

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: "category_id",
    onDelete: "CASCADE",
}),
    // Categories have many Products
    Category.hasMany(Product, {
        foreignKey: "category_id",
        onDelete: "CASCADE",
    });
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
    through: "productTag",
    foreignKey: "product_id",
    onDelete: "CASCADE",
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
    through: "productTag",
    foreignKey: "tag_id",
    onDelete: "CASCADE",
});

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};
