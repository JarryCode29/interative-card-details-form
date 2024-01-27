import { useState } from 'react';
import '../index.css'
import propTypes from 'prop-types';
import { CheckComplete } from './CheckComplete';
import { Button } from './Button';



export const FormContent = ({onInputChange}) => {
  const [cardHolder, setCardHolder] = useState('');

  const [cardNumber, setCardNumber] =  useState('')
  const [expiryDateMm, setExpiryDateMm] =  useState('')
  const [expiryDateYy, setExpiryDateYy] =  useState('')
  const [cvv, setCvv] =  useState('')
  const [showForm, setShowForm] = useState(true)
  const [formComplete, setFormComplete] = useState(false)


  const handleInputChange = (e, setterFunction) => {
    const value = e.target.value

    let formattedValue = value;

    if (setterFunction === setCardNumber) {
      // Si el setterFunction es setCardNumber, aplicamos el formato al número de tarjeta
      formattedValue = value.replace(/\s/g, ''); // Eliminamos espacios existentes
      const chunkedValue = formattedValue.match(/.{1,4}/g); // Dividimos el valor en grupos de cuatro caracteres
  
      if (chunkedValue) {
        formattedValue = chunkedValue.slice(0, 4).join(' '); // Unimos los grupos con espacios
      }
    }else if(setterFunction === setExpiryDateMm){
      formattedValue = value.slice(0, 2)
    } else if(setterFunction === setExpiryDateYy){
      formattedValue = value.slice(0, 2)
    }else if(setterFunction === setCvv){
      formattedValue = value.slice(0, 3)
    }
    setterFunction(formattedValue)
    verifyCompleteForm()
    onInputChange({
      cardHolder: setterFunction === setCardHolder ? value : cardHolder,
      cardNumber: setterFunction === setCardNumber ? formattedValue : cardNumber,
      expiryDateMm: setterFunction === setExpiryDateMm ? formattedValue  : expiryDateMm,
      expiryDateYy: setterFunction === setExpiryDateYy ? formattedValue  : expiryDateYy,
      cvv: setterFunction === setCvv ? formattedValue  : cvv,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowForm(false)
  }

 const verifyCompleteForm = () => {
  const complete =
    validateType(cardHolder, 'string') &&
    validateType(cardNumber, 'string') &&
    validateType(expiryDateMm, 'string') &&
    validateType(expiryDateYy, 'string') &&
    validateType(cvv, 'string');
setFormComplete(complete)
  
 }

 const validateType = (value, type) => {
  switch (type){
    case 'string':
      return typeof value === 'string' && value.trim() !== ''
      case 'number':
        return typeof value === 'number' && !isNaN(value)
        default:
          return true
  }
 }
  if(showForm){
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
                onChange={(e) => handleInputChange(e, setCardHolder)}
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
            <Button 
            text='Confirm'
            onClick={handleSubmit}
            disabled={!formComplete}
            />
        
        </form>
      </div>
    )
  }else{
    return (
      <>
      <CheckComplete />
      </>
    )
  }

}
FormContent.propTypes = {
  onInputChange: propTypes.func.isRequired,
}