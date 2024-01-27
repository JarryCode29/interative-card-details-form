import { useState } from 'react'
import { Circle } from '../hooks/Svg'
import '../index.css'
import { Button } from './Button'
import { FormContent } from './FormContent'
export const CheckComplete = () => {
  const[showForm, setShowForm]= useState(true)
  const handleSubmit= (e) => {
    e.preventDefault()
    setShowForm(false)
    window.location.reload()
  }
if (showForm) {
  return (
    <div className='h-full w-[330px] mt-[93px] flex flex-col justify-center items-center lg:mt-[300px]'>
       <div className='text-center'>
        <div className='flex justify-center'>
        <Circle />
        </div>
       <h1 className='mt-6 text-2xl font-bold'>THANK YOU!</h1>
       <p className='mt-4 text-gray-600'>We`ve added your card details</p>
       </div>

      <div className='h-full w-full mt-4'>
       <Button 
       text='Continue'
       onClick={handleSubmit}
       />
       </div>
    </div>
  )
}else{
 return(
   <> 
   <FormContent /> 
   </>
   
   )
}
}