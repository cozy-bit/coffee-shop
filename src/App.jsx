import './App.css'
import { useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import MenuItem from './MenuItem'
import OrderForm from './OrderForm'
import Footer from './Footer'

function App() {
  const [cartItems, setCartItems] = useState([])

  const menuItems = [
    { id: 1, name: "Эспрессо", description: "Классический крепкий кофе", price: 120 },
    { id: 2, name: "Капучино", description: "С нежной молочной пенкой", price: 180 },
    { id: 3, name: "Латте", description: "Кофе с большим количеством молока", price: 200 },
    { id: 4, name: "Американо", description: "Эспрессо с горячей водой", price: 140 }
  ]

  const addToCart = (item) => {
    setCartItems([...cartItems, item])
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <div>
      <Header cartItems={cartItems} onClearCart={clearCart} />
      <main>
        <Hero />
        <div className="menu-grid">
          {menuItems.map(item => (
            <MenuItem 
              key={item.id}
              item={item}
              onAddToCart={addToCart}
            />
          ))}
        </div>
        {cartItems.length > 0 && (
          <OrderForm 
            itemsCount={cartItems.length} 
            onOrderComplete={clearCart}
          />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App