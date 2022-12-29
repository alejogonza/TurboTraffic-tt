import './styles.css'

export const Input = props => {
  const { label, name, onChange, id, type } = props
  const handleOnChange = e => {
    if (onChange) {
      onChange(e.target.value)
    }
    return null
  }
  return (
    <div className='form__group field'>
      <input
        type={type}
        className='form__field'
        placeholder={label}
        onChange={handleOnChange}
        name={name}
        id={id}
        required
      />
      <label htmlFor={name} className='form__label'>
        {label}
      </label>
    </div>
  )
}
