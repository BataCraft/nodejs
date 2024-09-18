const Category = require('../Models/catagoryModel')


// To post category in database

exports.postCategory = async(req, res)=>{
    let category = new Category({
        category_name:req.body.category_name
    })

    // Check data is already exites or not id database'

    Category.findOne({category_name:category.category_name}) .then(async data=>{
        if(data == null)
        {
            category = await category.save()
            if(!category)
            {
                return res.status(400).json({
                    error:'Something Went Wrong!'
                })
            }
            res.send(category)

        }
        else{
            return res.status(400).json({error: "kk ho kk"});
        }
    })

  
}

// To show all category list

exports.showCategoryList = async(req, res)=>{
    const category = await Category.find();
    if(!category)
        {
            return res.status(400).json({
                error:'Something Went Wrong!'
            })
        }
        res.send(category)
}


//to find category details
exports.categoryDetails = async(req, res)=>{
    const category = await Category.findById(req.params.id)

    if(!category)
        {
            return res.status(400).json({
                error:'Something Went Wrong!'
            })
        }
        res.send(category)
}

// To update
exports.updateCategory = async(req, res)=>{
    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            category_name : req.body.category_name
        },
       { new : true} //to show updated values in result

        
    )
    if(!category)
        {
            return res.status(400).json({
                error:'Something Went Wrong!'
            })
        }
        res.send(category)
}


//To DELEte

exports.deleteCategory = (req, res)=>{
    Category.findByIdAndDelete(req.params.id).then(category=>{
        if(!category)
        {
            return res.status(403).json({error: 'category not found!'})
        }
        else{
            return res.status(200).json({msg: 'Category Deleted'})
        }
    })

    .catch(err=>{
        return res.status(403).json({error: 'category not found!'})
    })

}