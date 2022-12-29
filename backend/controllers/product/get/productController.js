import { isPositiveInteger } from '../../../libs/functions'

const GetProduct = async (req, res) => {
  try {
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

const GetProductId = async (req, res) => {
  try {
    const { id } = req.query
    if (!isPositiveInteger(id)) {
      return res.status(400).json({
        errType: 'id',
        message: 'id must be a positive integer'
      })
    }
    const productQuery = await req.context.models.Products.findOne({
      where: { id: id }
    })
    if (productQuery) {
      return res.status(200).json({
        product: productQuery,
        success: true
      })
    }

    return res.status(400).json({
      errType: 'id',
      message: 'Product id not found'
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
  GetAdminProduct,
  GetProductId
}
