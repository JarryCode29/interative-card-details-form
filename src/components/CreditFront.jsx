import {Ellipse} from '../hooks/Svg'
import { NumCard } from './NumCard'
import '../index.css'
import propTypes from 'prop-types'


export const CreditFront = ({resultado}) => {
  return (
    <div className='h-[157px] w-[286px] bg-card-credit-front bg-cover bg-center  absolute bottom-[-90px] left-5'>
         <div className='h-[30px] w-[55px] p-[20px]'>
         <Ellipse />
         </div>
         <div className='h-[45px] w-[247px] ml-[18px] text-lg flex flex-col  justify-center mt-[43px] '>
          <NumCard {...resultado}/>
         </div>
    </div>
  )
}
CreditFront.propTypes = {
    resultado: propTypes.object.isRequired,
}
