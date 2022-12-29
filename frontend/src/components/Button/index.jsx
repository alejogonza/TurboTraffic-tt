import './styles.css'

export const Button = props => {
  let { label, isDisabled, isLoading, onClick } = props
  const handleOnClick = e => {
    if (onClick) {
      onClick(e.target.value)
    }
    return null
  }
  return (
    <button
    onClick={handleOnClick}
      className={`button-50 ${isDisabled || isLoading ? 'disabled' : ''}`}
      disabled={isDisabled ? true : false}
    >
      {isLoading ? (
        <div className='lds-ellipsis'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        label
      )}
    </button>
  )
}
