import { useState } from 'react';
import '../index.css'
import propTypes from 'prop-types';



export const FormContent = ({onInputChange}) => {
  const [cardHolder, setCardHolde] =  useState('')
  const [cardNumber, setCardNumber] =  useState('')
  const [expiryDateMm, setExpiryDateMm] =  useState('')
  const [expiryDateYy, setExpiryDateYy] =  useState('')
  const [cvv, setCvv] =  useState('')

  const handleInputChange = (e, setterFunction) => {
    const value = e.target.value
    setterFunction(value)
    onInputChange({
      cardHolder,
      cardNumber,
      expiryDateMm,
      expiryDateYy,
      cvv,
    })
    console.log(value)
  }
  return (
    <div className='h-full w-[330px] mt-[93px] lg:flex justify-center lg:items-center '>
      <form>
         <div className='flex flex-col justify-center text-very-dark-violet '>
         <label  >
              CARDHODER NAME
          </label>
          <input
              className='h-[45px] w-full border border-active-input-border rounded-md p-[10px] mt-[12px] text-gray-300' 
              type="text"
              value={cardHolder}
              onChange={(e) => handleInputChange(e, setCardHolde)}
              placeholder='jond doe'
              />
         </div>

         <div className='flex flex-col justify-center mt-[23px] text-very-dark-violet'>
         <label  >
              CARD NUMBER
          </label>
          <input
              className='h-[45px] w-full border border-active-input-border rounded-md p-[10px] mt-[12px] text-gray-300' 
              type="text"
              value={cardNumber}
              onChange={(e) => handleInputChange(e, setCardNumber)}
              placeholder='e.g. 1234 5678 9123 0000'
              />
         </div>

         <div className='flex flex-col justify-center mt-[23px] text-very-dark-violet'>
         <label>
              EXP. DATE (MM/YY)  CVV
          </label>
          <div className='flex '>
          <input
              className='h-[45px] w-[75px] mr-[10px] border border-active-input-border rounded-md p-[10px] mt-[12px] text-gray-300'
              type="text"
              value={expiryDateMm}
              onChange={(e) => handleInputChange(e, setExpiryDateMm)}
              placeholder='MM' 
              />

              <input
              className='h-[45px] w-[75px] mr-[10px] border border-active-input-border rounded-md p-[10px] mt-[12px] text-gray-300' 
              type="text"
              value={expiryDateYy}
              onChange={(e) => handleInputChange(e, setExpiryDateYy)}
              placeholder='YY' 
              />

              <input
               className='h-[45px] w-[160px] border border-active-input-border rounded-md p-[10px] mt-[12px] text-gray-300' 
              type="text"
              value={cvv}
              onChange={(e) => handleInputChange(e, setCvv)}
              placeholder='123' 
              />
          </div>
         </div>

          <button
          className='h-[53px] w-full border rounded-md bg-very-dark-violet text-white mt-[29px] mb-[43px]' 
          type="submit"
          >Confirm
          </button>
      </form>
    </div>
  )

}
FormContent.propTypes = {
  onInputChange: propTypes.func.isRequired,
}