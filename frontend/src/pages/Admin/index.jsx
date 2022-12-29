import { useState, useEffect } from 'react'
import { getAdminProducts } from '../../calls'
import Styles from './styles.module.css'
import { Button } from '../../components'
import { useNavigate } from 'react-router-dom'
import { useStoreContext } from '../../context/ContextProvider'

export const Admin = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  const { setContextStore } = useStoreContext()

  useEffect(() => {
    ;(async function () {
      const productsList = await getAdminProducts()
      if (productsList.length > 0) {
        setProducts(productsList)
      } else {
        setContextStore({
          user: ''
        })
        navigate('/register')
      }
    })()
  }, [navigate, setContextStore])

  return (
    <div className={Styles.container}>
      <h1>TurboTraffic Shoes</h1>
      <h1>Admin zone</h1>
      <div>
        <Button
          label='Home'
          onClick={() => {
            navigate('/home')
          }}
        />
      </div>
      <div className={Styles.grid}>
        {products.map(product => (
          <article className={Styles.box} key={product.id}>
            <img
              className={Styles.image}
              src={product.image}
              alt={product.title}
            />
            <h2>{product.title}</h2>
            {product.reviews.length > 0 ? (
              <div className={Styles.oneLine}>
                <div>
                  <h2>Like:</h2>
                  <span>{product.reviews[0]?.like} {product.reviews[0]?.like === 1 ? 'opinión': 'opiniones'}</span>
                </div>
                <div>
                  <h2>Dislike:</h2>
                  <span>{product.reviews[0]?.dislike} {product.reviews[0]?.dislike === 1 ? 'opinión': 'opiniones'}</span>
                </div>
              </div>
            ) : (
              <h2>No hay datos</h2>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
