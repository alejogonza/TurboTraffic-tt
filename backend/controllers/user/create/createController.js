import {
  validateString,
  isPositiveInteger,
  incrementProperty
} from '../../../libs/functions'

const CreateUser = async (req, res) => {
  try {
    const { name } = req.body
    const user = await req.context.models.Users.findOne({
      where: { name }
    })
    if (!user) {
      await req.context.models.Users.create({
        name
      })
      return res.status(200).json({
        message: 'user successfully created',
        success: true
      })
    }
    return res.status(400).json({
      title: 'error',
      message: 'user exist'
    })
  } catch (error) {
    console.log(error)
    if (error && error.code) {
      return res.status(error.code).json(error)
    }
    return res.status(500).json(error)
  }
}
const CreateReview = async (req, res) => {
  try {
    const { id, review } = req.query
    if (!isPositiveInteger(id)) {
      return res.status(400).json({
        errType: 'id',
        message: 'id must be a positive integer'
      })
    }
    if (!validateString(review, ['like', 'dislike'])) {
      return res.status(400).json({
        errType: 'review',
        message: 'review param must be like or dislike'
      })
    }

    const reviewQuery = await req.context.models.Reviews.findOne({
      where: { productId: id }
    })
    if (reviewQuery) {
      const updatedProduct = incrementProperty(reviewQuery.toJSON(), review)

      reviewQuery.set(updatedProduct)
      await reviewQuery.save()
      return res.status(200).json({
        message: 'Review successfully updated'
      })
    } else {
      const product = await req.context.models.Products.findByPk(id)
      if (product) {
        await req.context.models.Reviews.create({
          like: review === 'like' ? 1 : 0,
          dislike: review === 'dislike' ? 1 : 0,
          productId: id
        })
        return res.status(200).json({
          message: 'Review successfully updated'
        })
      } else {
        return res.status(400).json({
          message: 'product not found',
          productId: id
        })
      }
    }
  } catch (error) {
    console.log(error)
    if (error && error.code) {
      return res.status(error.code).json(error)
    }
    return res.status(500).json(error)
  }
}
module.exports = {
  CreateUser,
  CreateReview
}
