import {CreditBack} from './CreditBack'
import { CreditFront } from './CreditFront'
import '../index.css'
import propTipes from 'prop-types'



export const CreditCardContent = ({data}) => {
  
  return (
    <div className='flex flex-col justify-center items-center relative'>
    <CreditBack resultado={data}/>
    <CreditFront resultado={data}/>
    </div>
  )
}
CreditCardContent.propTypes = {
    data: propTipes.object.isRequired,
}