import '../index.css'
import propTypes from 'prop-types'


export const CreditBack = ({resultado}) => {
  return (
    <div className='h-[157px] w-[286px] bg-card-credit-back bg-cover bg-center mt-[32px] ml-[30px] relative'>
    <p className='text-white absolute top-[70px] left-[230px] text-[12px]'>{resultado.cvv}</p>
</div>
  )
}
CreditBack.propTypes = {
  resultado: propTypes.object.isRequired,
}
