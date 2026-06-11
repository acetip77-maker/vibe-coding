function Card({ name, description, favorite }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="favorite">❤️ 좋아하는 것: {favorite}</p>
    </div>
  )
}

export default Card
