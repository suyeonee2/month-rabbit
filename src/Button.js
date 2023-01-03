
const getstyle = {
  borderRadius: '99px',
  outline: 'none',
  width: '80px',
  height: '50px',
  cursor: 'pointer',
  border: '1px solid #ff960d',
  color: '#ff9d25',
  backgroundColor: 'rgba(255, 200, 0, 0.2)'
};

const restyle = {
  borderRadius: '99px',
  outline: 'none',
  width: '80px',
  height: '50px',
  cursor: 'pointer',
  border: '1px solid #7090ff',
  color: '#7090ff',
  backgroundColor: 'rgba(168, 220, 255, 0.2)'
};

function Button({ children, onClick, value}) {
  const style = value === 'getstyle' ? getstyle : restyle;
  return (
    <button style={style} onClick={onClick}>{children}</button>
  )
}


export default Button