import { useState, useEffect } from 'react'
import { getProductId, createReview } from '../../calls'
import Styles from './styles.module.css'
import { Button } from '../../components'
import { useParams, useNavigate } from 'react-router-dom'
import { useStoreContext } from '../../context/ContextProvider'

export const Product = () => {
  const [product, setProduct] = useState({})
  const [review, setReview] = useState(null)
  const { id } = useParams()
  const history = useNavigate()
  const navigate = useNavigate()
  const { setContextStore } = useStoreContext()

  useEffect(() => {
    ;(async function () {
      const product = await getProductId(id)
      if (product) {
        setProduct(product)
      } else {
        setContextStore({
          user: ''
        })
        navigate('/register')
      }
    })()
  }, [id, navigate, setContextStore])

  const getReview = async opinion => {
    setReview(opinion)
    await createReview(id, opinion)
  }
  return (
    <div className={Styles.container}>
      <h1>TurboTraffic Shoes</h1>
      <div className={Styles.paddingContent}>
        <article className={Styles.box} key={product.id}>
          <div className={Styles.paddingContent}>
            <img
              className={Styles.image}
              src={product.image}
              alt={product.title}
            />
            {!review ? (
              <div className={Styles.containerReview}>
                <Button label='Like' onClick={() => getReview('like')} />
                <Button label='Dislike' onClick={() => getReview('dislike')} />
              </div>
            ) : (
              <h2>Tu opinión: {review}</h2>
            )}
            <Button label='Volver' onClick={() => history(-1)} />
          </div>
          <section className={Styles.paddingContent}>
            <h1 className={Styles.title}>{product.title}</h1>
            <h2>Descripcion corta:</h2>
            <span>{product.shortDescription}</span>
            <h2>Descripcion:</h2>
            <span>{product.description}</span>
            <div className={Styles.oneLine}>
              <div>
                <h2>Precio:</h2>
                <span>${product.price} USD</span>
              </div>
              <div>
                <h2>Stock:</h2>
                <span>{product.stock} Disponibles</span>
              </div>
            </div>

            <h2>skuId:</h2>
            <span>{product.skuId}</span>
          </section>
        </article>
      </div>
    </div>
  )
}
