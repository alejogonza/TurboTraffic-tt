import Styles from './styles.module.css'
import { Input, Button } from '../../components'
import { useState } from 'react'
import { register } from '../../calls'
import { useStoreContext } from '../../context/ContextProvider'

export const Register = () => {
  const [name, setName] = useState('')
  const [isLoadingButton, setLoadingButton] = useState(false)
  const { setContextStore } = useStoreContext()

  const loginRequest = async () => {
    setLoadingButton(true)
    await register(name)
    setContextStore({
      user: name
    })
    setLoadingButton(false)
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.box}>
        <h1>Registrate</h1>
        <Input label='Nombre' onChange={setName} type='text' />
        <Button
          label='Entrar'
          onClick={loginRequest}
          isLoading={isLoadingButton}
          isDisabled={name.length === 0}
        />
      </div>
    </div>
  )
}
