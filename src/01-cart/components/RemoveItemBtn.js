import './../styles/RemoveItemBtn.scss'
import RemoveItemIcon from './../../dotown/pizza.png'

function RemoveItemBtn() {
  const RemoveItem = () => {
    console.log('cart emptied')
  }

  return (
    <div className="y-remove-item-border">
      <div className="y-remove-item-icon">
        <img src={RemoveItemIcon} alt="remove item icon" />
      </div>
      <p className="y-remove-item" onClick={RemoveItem}>
        清空購物車
      </p>
    </div>
  )
}

export default RemoveItemBtn
