function MenuItem(props) {
  return (
    <div className="menu-item">
      <img src={props.item.image} alt={props.item.name} />
      <h3>{props.item.name}</h3>
      <p className="description">{props.item.description}</p>
      <p className="price">{props.item.price} ₽</p>
      <button onClick={() => props.onAddToCart(props.item)}>
        Добавить в корзину
      </button>
    </div>
  )
}

export default MenuItem