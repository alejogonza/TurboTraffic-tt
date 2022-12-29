import { useState, useEffect } from 'react'
import { getProducts } from '../../calls'
import Styles from './styles.module.css'
import { Button } from '../../components'
import { useNavigate } from 'react-router-dom'
import { useStoreContext } from '../../context/ContextProvider'

export const Home = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  const { contextStore, setContextStore } = useStoreContext()

  useEffect(() => {
    ;(async function () {
      const productsList = await getProducts()
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

  const logout = () => {
    localStorage.clear()
    setContextStore({
      user: ''
    })
    navigate('/register')
  }

  return (
    <div className={Styles.container}>
      <h1>TurboTraffic Shoes</h1>
      <h1>!NeW CoLeCtIoN!</h1>
      <div>
        <Button label='Logout' onClick={logout} />
        {contextStore.user === 'fernando' && (
          <Button
            label='Admin zone'
            onClick={() => {
              navigate('/admin')
            }}
          />
        )}
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
            <span>{product.shortDescription}</span>
            <br />
            <Button
              label='+Ver mas'
              onClick={() => navigate(`/product/${product.id}`)}
            />
          </article>
        ))}
      </div>
    </div>
  )
}
