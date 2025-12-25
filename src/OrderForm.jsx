import { useState } from 'react'

function OrderForm(props) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Заказ оформлен! ✅\nИмя: ${name}\nТелефон: ${phone}\nТоваров: ${props.itemsCount}`)
    setName('')
    setPhone('')
    props.onOrderComplete()
  }

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h3>Оформить заказ</h3>
      <input 
        type="text"
        placeholder="Ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input 
        type="tel"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">Заказать ({props.itemsCount} товаров)</button>
    </form>
  )
}

export default OrderForm