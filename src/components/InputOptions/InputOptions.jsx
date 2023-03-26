import './inputOptions.css'

const InputOptions = ({ Icon, title, color }) => {
  return (
    <div className='inputOptions'>
        {Icon && <Icon sx={{color: {color} }} />}
        <p>{title}</p>
    </div>
  )
}

export default InputOptions