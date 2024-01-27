import {CreditBack} from './CreditBack'
import { CreditFront } from './CreditFront'
import '../index.css'
import propTipes from 'prop-types'
import { useMediaQuery } from 'react-responsive'



export const CreditCardContent = ({data}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  return (
    <>
    {
      isMobile ? 
      (   
      <div className='flex flex-col justify-center items-center relative'>
      <CreditBack result={data}/>
      <CreditFront result={data}/>
      </div>   
      )
      :
      (
        <>
      <div className='lg:relative'>
        <CreditFront result={data}/>
       
      </div>

      <div className='lg:relative'>
        <CreditBack result={data}/>
      </div>
      </>
      )
    }
 
    </>
  )
}
CreditCardContent.propTypes = {
    data: propTipes.object.isRequired,
}