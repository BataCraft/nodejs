const express = require('express')
const { postCategory, showCategoryList, categoryDetails, updateCategory, deleteCategory } = require('../Controller/CategoryController')
const { route } = require('./testRoutes')

const router = express.Router()

router.post('/postcategory', postCategory)
router.get('/categorylist', showCategoryList)

router.get('/categorydetails/:id', categoryDetails)

router.put('/updatecategory/:id', updateCategory)

router.delete('deletecategory/:id', deleteCategory)

module.exports = router