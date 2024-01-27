import {Ellipse} from '../hooks/Svg'
import { NumCard } from './NumCard'
import '../index.css'
import propTypes from 'prop-types'


export const CreditFront = ({result}) => {
  return (
    <div className='h-[157px] w-[286px] bg-card-credit-front bg-cover bg-center  absolute bottom-[-90px] left-5  lg:h-[240px] lg:w-[444px] lg:absolute lg:bottom-0 lg:left-[161px] lg:top-[186px] '>
         <div className='h-[30px] w-[55px] p-[20px]'>
         <Ellipse />
         </div>
         <div className='h-[45px] w-[247px] ml-[18px] text-lg flex flex-col  justify-center mt-[43px] lg:mt-[95px] lg:w-[386px] lg:flex lg:flex-col lg:justify-center '>
          <NumCard {...result}/>
         </div>
    </div>
  )
}
CreditFront.propTypes = {
    result: propTypes.object.isRequired,
}
