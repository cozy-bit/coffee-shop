import { useState } from 'react'

function Header(props) {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const total = props.cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <header>
      <h1>☕ Кофейня "Аромат"</h1>
      <div className="cart" onClick={() => setIsCartOpen(!isCartOpen)}>
        🛒 Корзина: {props.cartItems.length}
        {isCartOpen && (
          <div className="cart-details" onClick={(e) => e.stopPropagation()}>
            {props.cartItems.length === 0 ? (
              <p>Корзина пуста</p>
            ) : (
              <>
                {props.cartItems.map((item, index) => (
                  <p key={index}>{item.name} - {item.price}₽</p>
                ))}
                <p style={{fontWeight: 'bold', marginTop: '10px'}}>
                  Итого: {total}₽
                </p>
                <button 
                  className="clear-btn"
                  onClick={props.onClearCart}
                >
                  Очистить корзину
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header