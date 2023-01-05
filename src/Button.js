import './Button.css'

function Button({ children, onClick}) {
  
  return (
    <button className='pickup' onClick={onClick}>{children}</button>
  )
}


export default Button