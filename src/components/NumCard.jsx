
import propTypes from 'prop-types'


export const NumCard = (dataNew) => {
  return (
    <>
    <div className="mt-[30px]">
    <h1 className="text-[23px]">{dataNew.cardNumber}</h1>
    </div>
    <div className="flex justify-between mt-[10px]">
        <h1 className="text-[12px]">{dataNew.cardHolder}</h1>
        <h1 className="text-xs">{`${dataNew.expiryDateMm}/${dataNew.expiryDateYy}`}</h1>
    </div>
    </>
  )
}
NumCard.propTypes = {
    cardNumber: propTypes.string,
}
