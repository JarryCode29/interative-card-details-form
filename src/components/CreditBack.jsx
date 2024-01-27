import '../index.css'
import propTypes from 'prop-types'


export const CreditBack = ({result}) => {
  return (
    <div className='h-[157px] w-[286px] bg-card-credit-back bg-cover bg-center mt-[32px] ml-[30px] relative lg:mt-0 lg:ml-0 lg:absolute lg:left-[225px] lg:top-[470px] lg:h-[244px] lg:w-[444px]'>
    <p className='text-white absolute top-[70px] left-[230px] text-[12px] lg:top-[109px] lg:left-[369px]'>{result.cvv}</p>
    </div>
  )
}
CreditBack.propTypes = {
  result: propTypes.object.isRequired,
}
