import './../styles/ContinueShoppingBtn.scss'

function ContinueShoppingBtn() {
  const ContinueShopping = () => {
    console.log('Continue Shopping')
  }

  return (
    <div className="y-continue-shopping-border">
      <p className="y-continue-shopping" onClick={ContinueShopping}>
        ็นผ็บ้้
      </p>
    </div>
  )
}

export default ContinueShoppingBtn
