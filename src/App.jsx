import './App.css'
import { useState, useEffect } from 'react'
import Header from './Header'
import Hero from './Hero'
import MenuItem from './MenuItem'
import OrderForm from './OrderForm'
import Footer from './Footer'

function App() {
  // Инициализация темы из localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme === 'dark'
  })

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('coffeeCart')
    return savedCart ? JSON.parse(savedCart) : []
  })
  
  const [activeCategory, setActiveCategory] = useState('Все')

  // Сохранение темы в localStorage
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    // Добавляем/убираем класс на body для применения темы
    if (isDarkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [isDarkMode])

  // Сохранение корзины
  useEffect(() => {
    localStorage.setItem('coffeeCart', JSON.stringify(cartItems))
  }, [cartItems])

  const menuItems = [
    { id: 1, name: "Эспрессо", description: "Классический крепкий кофе", price: 120, category: "Кофе", image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=900" },
    { id: 2, name: "Капучино", description: "С нежной молочной пенкой", price: 180, category: "Кофе", image: "https://images.unsplash.com/photo-1594261956806-3ad03785c9b4?w=900" },
    { id: 3, name: "Латте", description: "Кофе с большим количеством молока", price: 200, category: "Кофе", image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=900" },
    { id: 4, name: "Американо", description: "Эспрессо с горячей водой", price: 140, category: "Кофе", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=900" },
    { id: 5, name: "Зеленый чай", description: "Ароматный листовой чай", price: 100, category: "Чай", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=900" },
    { id: 6, name: "Черный чай", description: "Классический чай с лимоном", price: 90, category: "Чай", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=900" },
    { id: 7, name: "Чизкейк", description: "Нежный творожный десерт", price: 250, category: "Десерты", image: "https://images.unsplash.com/photo-1533134242443-d4144cf1d05c?w=900" },
    { id: 8, name: "Круассан", description: "Свежая французская выпечка", price: 150, category: "Десерты", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900" }
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

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div>
      <Header 
        cartItems={cartItems} 
        onClearCart={clearCart}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />
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