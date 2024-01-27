import { PropTypes } from 'prop-types'

export const Button = ({onClick, text,disabled}) => {
  return (
    <button
    className='h-[53px] w-full border rounded-md bg-very-dark-violet text-white mt-[29px] mb-[43px]' 
    type="submit"
    onClick={onClick}
    disabled={disabled}
    >{text}
    </button>
  )
}
Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
}

