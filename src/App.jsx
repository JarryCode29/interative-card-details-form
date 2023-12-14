import { CreditCardContent} from './components/CreditCardContent'
import { FormContent } from './components/FormContent'
import './index.css'
export const App = () => {
  return (
    <div className="h-screen w-[100%] bg-[black] text-white">
      <div className='h-[240px] bg-bg-credit-card-mv'>
          <CreditCardContent />
      </div>
      <div className='bg-white text-black flex flex-col justify-center items-center '>
          <FormContent />
      </div>
    </div>
  )
}
