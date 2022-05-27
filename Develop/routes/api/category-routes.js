const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


 // find all categories
 // be sure to include its associated Products
router.get('/', (req, res) => {
 
  Category.findAll({
    include: [Product]


  }).then(db => {res.json(db)})
});


// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', (req, res) => {
  

  Category.findOne({
    where: {id:req.params.id}, 
    include: [Product]

}).then(db => {res.json(db)})
});


// create a new category
router.post('/', (req, res) => {
  
  Category.create(
    req.body

  ).then(db => {res.json(db)})
});


 // update a category by its `id` value
router.put('/:id', (req, res) => {
 
  Category.update(req.body,{
    where: {id: req.params.id},

  }).then(db => {res.json(db)})
});


// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  
  Category.destroy({
    where: {id: req.params.id}
  }).then(db => {res.json(db)})
});

module.exports = router;
