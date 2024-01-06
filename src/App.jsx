import { useState } from 'react'
import { CreditCardContent} from './components/CreditCardContent'
import { FormContent } from './components/FormContent'
import './index.css'

export const App = () => {

  const [formData, setFormData] = useState({
    cardNumber: '0000 0000 0000 0000',
    cardHolder: 'Maria',
    expiryDateMm: '08',
    expiryDateYy: '09',
    cvv: '123',
  })
  
  const handleFormInputChange = (value) => {
    setFormData(value)
  }
  
  return (
    <div className="h-screen w-[100%] bg-[black] text-white lg:flex lg:flex-row">
      <div className='h-[240px] bg-bg-credit-card-mv lg:w-[481px] lg:bg-credit-card-desk lg:bg-no-repeat lg:h-[100%] lg:bg-cover'>
          <CreditCardContent 
          data={formData}
          />
      </div>
      <div className='bg-white text-black flex flex-col justify-center items-center lg:w-full'>
          <FormContent 
          onInputChange={handleFormInputChange}
          />
      </div>
    </div>
  )
}
