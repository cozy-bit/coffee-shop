import './App.css'
import { useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import MenuItem from './MenuItem'
import OrderForm from './OrderForm'
import Footer from './Footer'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [activeCategory, setActiveCategory] = useState('Все')

  const menuItems = [
    { id: 1, name: "Эспрессо", description: "Классический крепкий кофе", price: 120, category: "Кофе", image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVzcHJlc3NvfGVufDB8fDB8fHww" },
    { id: 2, name: "Капучино", description: "С нежной молочной пенкой", price: 180, category: "Кофе", image: "https://images.unsplash.com/photo-1594261956806-3ad03785c9b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, name: "Латте", description: "Кофе с большим количеством молока", price: 200, category: "Кофе", image: "https://plus.unsplash.com/premium_photo-1674327105076-36c4419864cf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGF0dGV8ZW58MHx8MHx8fDA%3D" },
    { id: 4, name: "Американо", description: "Эспрессо с горячей водой", price: 140, category: "Кофе", image: "https://images.unsplash.com/photo-1669872484166-e11b9638b50e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFtZXJpY2Fub3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 5, name: "Зеленый чай", description: "Ароматный листовой чай", price: 100, category: "Чай", image: "https://images.unsplash.com/photo-1566221280196-43e76121ff51?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGdyZWVuJTIwdGVhfGVufDB8fDB8fHww" },
    { id: 6, name: "Черный чай", description: "Классический чай с лимоном", price: 90, category: "Чай", image: "https://images.unsplash.com/photo-1617543414010-212c4537604d?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 7, name: "Чизкейк", description: "Нежный творожный десерт", price: 250, category: "Десерты", image: "https://images.unsplash.com/photo-1635327173758-85badf17f995?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZXNlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 8, name: "Круассан", description: "Свежая французская выпечка", price: 150, category: "Десерты", image: "https://images.unsplash.com/photo-1623334044303-241021148842?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JvaXNzYW50fGVufDB8fDB8fHww" }
  ]

  const categories = ['Все', 'Кофе', 'Чай', 'Десерты']

  const filteredItems = activeCategory === 'Все' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

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
        
        <div className="categories">
          {categories.map(category => (
            <button 
              key={category}
              className={activeCategory === category ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map(item => (
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