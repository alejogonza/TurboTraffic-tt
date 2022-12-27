const GetProduct = async (req, res) => {
  try {
    console.log(req.context)
    const products = await req.context.models.Products.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    })
    return res.status(200).json({
      products,
      success: true
    })
  } catch (error) {
    console.log(error)
    if (error && error.code) {
      return res.status(error.code).json(error)
    }
    return res.status(500).json(error)
  }
}

const GetAdminProduct = async (req, res) => {
  try {
    console.log(req.context)
    const products = await req.context.models.Products.findAll({
      include: [
        {
          model: req.context.models.Reviews,
          as: 'reviews'
        }
      ]
    })
    return res.status(200).json({
      products,
      success: true
    })
  } catch (error) {
    console.log(error)
    if (error && error.code) {
      return res.status(error.code).json(error)
    }
    return res.status(500).json(error)
  }
}
module.exports = {
  GetProduct,
  GetAdminProduct
}
